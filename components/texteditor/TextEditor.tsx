"use client";

import { EditorContent, useEditor } from "@tiptap/react";

import BulletList from "@tiptap/extension-bullet-list";
import EditorToolbar from "./EditorToolbar";
import Heading from "@tiptap/extension-heading";
import OrderedList from "@tiptap/extension-ordered-list";
import React from "react";
import StarterKit from "@tiptap/starter-kit";

export default function TextEditor({
  text,
  onChange,
}: {
  text: string;
  onChange: (richText: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({}),
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-bold ",
          levels: [2],
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal m-auto p-[inherit] ml-6",
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-decimal m-auto p-[inherit] ml-6",
        },
      }),
    ],
    content: text,
    editorProps: {
      attributes: {
        class:
          "rounded-md border min-h-[250px] border-input bg-background p-4 ",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      // console.log(editor.getHTML());
    },
  });

  return (
    <div className="text-sm">
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
