self.onmessage = (e: MessageEvent) => {
  const { type, payload } = e.data;

  if (type === "INIT") {
    const { allMarkerIds } = payload;
    let visibleIds = [...allMarkerIds]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

    // Send initial state
    self.postMessage({ type: "UPDATE", payload: visibleIds });

    // Start interval
    setInterval(() => {
      if (visibleIds.length === 0) return;

      const hiddenIds = allMarkerIds.filter(
        (id: number) => !visibleIds.includes(id),
      );
      if (hiddenIds.length === 0) return;

      const removeIndex = Math.floor(Math.random() * visibleIds.length);
      const addIndex = Math.floor(Math.random() * hiddenIds.length);

      const newVisibleIds = [...visibleIds];
      newVisibleIds.splice(removeIndex, 1);
      newVisibleIds.push(hiddenIds[addIndex]);

      visibleIds = newVisibleIds;
      self.postMessage({ type: "UPDATE", payload: visibleIds });
    }, 2000);
  }
};
