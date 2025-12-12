import { create } from "zustand";
import { Order } from "../models/order.model";

interface OrderState {
  orders: Order[];
  activeOrder: Order | null;
  setOrders: (orders: Order[]) => void;
  setActiveOrder: (order: Order) => void;
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: Order["status"]) => void;
}

export const useOrderStore = create<OrderState>((set) => ({
  orders: [],
  activeOrder: null,
  setOrders: (orders) => set({ orders }),
  setActiveOrder: (activeOrder) => set({ activeOrder }),
  addOrder: (order) => set((state) => ({ orders: [order, ...state.orders] })),
  updateOrderStatus: (orderId, status) =>
    set((state) => ({
      orders: state.orders.map((o) =>
        o.id === orderId ? { ...o, status } : o,
      ),
    })),
}));
