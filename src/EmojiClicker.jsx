import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😊" }])
  const addEmoji = () => {
    setEmojis(oldEmojis => [...oldEmojis, { id: uuid(), emoji: "😊" }])
  }
  const deleteEmoji = (id) => {
    setEmojis(oldEmojis => {
      return oldEmojis.filter(e => e.id !== id)
  })}

  const makeHearts = () => {
    setEmojis(oldEmojis => {
      return oldEmojis.map((emoji) => {
        return {...emoji, emoji: "❤️"}})
      })
  }

  return (
    <div>
      {emojis.map(e => (
        <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{ fontSize: "4rem" }}>{e.emoji}</span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={makeHearts}>Make them all hearts</button>
    </div>
  )
}
