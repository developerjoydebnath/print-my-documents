"use client";

import { EditorContent, EditorContext, useEditor } from "@tiptap/react";
import * as React from "react";

// --- Tiptap Core Extensions ---
import { Highlight } from "@tiptap/extension-highlight";
import { Image } from "@tiptap/extension-image";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { TextAlign } from "@tiptap/extension-text-align";
import { Typography } from "@tiptap/extension-typography";
import { Selection } from "@tiptap/extensions";
import { StarterKit } from "@tiptap/starter-kit";

// --- UI Primitives ---
import { Button } from "@/shared/components/form/editor/tiptap-ui-primitive/button";
import { Spacer } from "@/shared/components/form/editor/tiptap-ui-primitive/spacer";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
} from "@/shared/components/form/editor/tiptap-ui-primitive/toolbar";

// --- Tiptap Node ---
import "@/shared/components/form/editor/tiptap-node/blockquote-node/blockquote-node.scss";
import "@/shared/components/form/editor/tiptap-node/code-block-node/code-block-node.scss";
import "@/shared/components/form/editor/tiptap-node/heading-node/heading-node.scss";
import { HorizontalRule } from "@/shared/components/form/editor/tiptap-node/horizontal-rule-node/horizontal-rule-node-extension";
import "@/shared/components/form/editor/tiptap-node/horizontal-rule-node/horizontal-rule-node.scss";
import "@/shared/components/form/editor/tiptap-node/image-node/image-node.scss";
import { ImageUploadNode } from "@/shared/components/form/editor/tiptap-node/image-upload-node/image-upload-node-extension";
import "@/shared/components/form/editor/tiptap-node/list-node/list-node.scss";
import "@/shared/components/form/editor/tiptap-node/paragraph-node/paragraph-node.scss";

// --- Tiptap UI ---
import { BlockquoteButton } from "@/shared/components/form/editor/tiptap-ui/blockquote-button";
import { CodeBlockButton } from "@/shared/components/form/editor/tiptap-ui/code-block-button";
import {
  ColorHighlightPopover,
  ColorHighlightPopoverButton,
  ColorHighlightPopoverContent,
} from "@/shared/components/form/editor/tiptap-ui/color-highlight-popover";
import { HeadingDropdownMenu } from "@/shared/components/form/editor/tiptap-ui/heading-dropdown-menu";
import { ImageUploadButton } from "@/shared/components/form/editor/tiptap-ui/image-upload-button";
import {
  LinkButton,
  LinkContent,
  LinkPopover,
} from "@/shared/components/form/editor/tiptap-ui/link-popover";
import { ListDropdownMenu } from "@/shared/components/form/editor/tiptap-ui/list-dropdown-menu";
import { MarkButton } from "@/shared/components/form/editor/tiptap-ui/mark-button";
import { TextAlignButton } from "@/shared/components/form/editor/tiptap-ui/text-align-button";
import { UndoRedoButton } from "@/shared/components/form/editor/tiptap-ui/undo-redo-button";

// --- Icons ---
import { ArrowLeftIcon } from "@/shared/components/form/editor/tiptap-icons/arrow-left-icon";
import { HighlighterIcon } from "@/shared/components/form/editor/tiptap-icons/highlighter-icon";
import { LinkIcon } from "@/shared/components/form/editor/tiptap-icons/link-icon";

// --- Hooks ---
import { useCursorVisibility } from "@/shared/hooks/use-cursor-visibility";
import { useIsMobile } from "@/shared/hooks/use-mobile";
import { useWindowSize } from "@/shared/hooks/use-window-size";

// --- Components ---

// --- Lib ---
import { handleImageUpload, MAX_FILE_SIZE } from "@/shared/lib/tiptap-utils";

// --- Styles ---
import "@/shared/components/form/editor/tiptap-templates/simple/simple-editor.scss";
import { cn } from "@/shared/lib/utils";

const MainToolbarContent = ({
  onHighlighterClick,
  onLinkClick,
  isMobile,
}: {
  onHighlighterClick: () => void;
  onLinkClick: () => void;
  isMobile: boolean;
}) => {
  return (
    <>
      <Spacer />

      <ToolbarGroup>
        <UndoRedoButton action="undo" />
        <UndoRedoButton action="redo" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <HeadingDropdownMenu levels={[1, 2, 3, 4]} portal={isMobile} />
        <ListDropdownMenu
          types={["bulletList", "orderedList", "taskList"]}
          portal={isMobile}
        />
        <BlockquoteButton />
        <CodeBlockButton />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <MarkButton type="bold" />
        <MarkButton type="italic" />
        <MarkButton type="strike" />
        <MarkButton type="code" />
        <MarkButton type="underline" />
        {!isMobile ? (
          <ColorHighlightPopover />
        ) : (
          <ColorHighlightPopoverButton onClick={onHighlighterClick} />
        )}
        {!isMobile ? <LinkPopover /> : <LinkButton onClick={onLinkClick} />}
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <MarkButton type="superscript" />
        <MarkButton type="subscript" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <TextAlignButton align="left" />
        <TextAlignButton align="center" />
        <TextAlignButton align="right" />
        <TextAlignButton align="justify" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <ImageUploadButton text="Add" />
      </ToolbarGroup>

      <Spacer />

      {isMobile && <ToolbarSeparator />}
    </>
  );
};

const MobileToolbarContent = ({
  type,
  onBack,
}: {
  type: "highlighter" | "link";
  onBack: () => void;
}) => (
  <>
    <ToolbarGroup>
      <Button data-style="ghost" onClick={onBack}>
        <ArrowLeftIcon className="tiptap-button-icon" />
        {type === "highlighter" ? (
          <HighlighterIcon className="tiptap-button-icon" />
        ) : (
          <LinkIcon className="tiptap-button-icon" />
        )}
      </Button>
    </ToolbarGroup>

    <ToolbarSeparator />

    {type === "highlighter" ? (
      <ColorHighlightPopoverContent />
    ) : (
      <LinkContent />
    )}
  </>
);

export function SimpleEditor({
  value,
  onValueChange,
  placeholder,
  className,
  disabled = false,
}: {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}) {
  const isMobile = useIsMobile();
  const { height } = useWindowSize();
  const [mobileView, setMobileView] = React.useState<
    "main" | "highlighter" | "link"
  >("main");
  const toolbarRef = React.useRef<HTMLDivElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    shouldRerenderOnTransaction: false,
    editorProps: {
      attributes: {
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        "aria-label": "Main content area, start typing to enter text.",
        class: "simple-editor",
      },
    },
    extensions: [
      StarterKit.configure({
        horizontalRule: false,
        link: {
          openOnClick: false,
          enableClickSelection: true,
        },
      }),
      HorizontalRule,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TaskList,
      TaskItem.configure({ nested: true }),
      Highlight.configure({ multicolor: true }),
      Image,
      Typography,
      Superscript,
      Subscript,
      Selection,
      ImageUploadNode.configure({
        accept: "image/*",
        maxSize: MAX_FILE_SIZE,
        limit: 3,
        upload: handleImageUpload,
        onError: (error) => console.error("Upload failed:", error),
      }),
    ],
    content: value, // Initialize with value from props
    onUpdate: ({ editor }) => {
      // Call onValueChange with the updated HTML content
      const html = editor.getHTML();
      onValueChange?.(html);
    },
  });

  const rect = useCursorVisibility({
    editor,
    overlayHeight: toolbarRef.current?.getBoundingClientRect().height ?? 0,
  });

  // Sync editor content with prop changes
  React.useEffect(() => {
    if (!editor || value === undefined) return;

    // Only update editor content if the value prop has changed
    const currentContent = editor.getHTML();
    if (currentContent !== value) {
      editor.commands.setContent(value, { emitUpdate: false }); // Pass object with emitUpdate
    }
  }, [editor, value]);

  React.useEffect(() => {
    if (!isMobile && mobileView !== "main") {
      setMobileView("main");
    }
  }, [isMobile, mobileView]);

  return (
    <div className={cn("rounded-md border", className)}>
      <EditorContext.Provider value={{ editor }}>
        <div className="w-full justify-start border-b">
          <Toolbar
            className=""
            ref={toolbarRef}
            style={{
              ...(isMobile
                ? {
                    bottom: `calc(100% - ${height - rect.y}px)`,
                  }
                : {}),
            }}
          >
            {mobileView === "main" ? (
              <MainToolbarContent
                onHighlighterClick={() => setMobileView("highlighter")}
                onLinkClick={() => setMobileView("link")}
                isMobile={isMobile}
              />
            ) : (
              <MobileToolbarContent
                type={mobileView === "highlighter" ? "highlighter" : "link"}
                onBack={() => setMobileView("main")}
              />
            )}
          </Toolbar>
        </div>

        <EditorContent
          disabled={disabled}
          editor={editor}
          role="presentation"
          className="h-fit max-h-[600px] min-h-[400px] overflow-auto p-4"
          placeholder={placeholder ? placeholder : "Write something ..."}
        />
      </EditorContext.Provider>
    </div>
  );
}
