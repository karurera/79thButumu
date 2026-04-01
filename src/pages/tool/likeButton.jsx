import { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  onSnapshot,
} from "firebase/firestore";

export default function LikeButton({ pageId }) {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const storageKey = `liked_${pageId}`;

  // ローカルストレージで「押し済み」を管理
  useEffect(() => {
    setLiked(localStorage.getItem(storageKey) === "true");
  }, [storageKey]);

  // Firestoreをリアルタイム監視
  useEffect(() => {
    const ref = doc(db, "likes", pageId);
    const unsub = onSnapshot(ref, (snap) => {
      setCount(snap.exists() ? snap.data().count : 0);
    });
    return () => unsub();
  }, [pageId]);

  const handleLike = async () => {
    if (loading) return;
    setLoading(true);

    const ref = doc(db, "likes", pageId);
    const snap = await getDoc(ref);
    const current = snap.exists() ? snap.data().count : 0;

    if (liked) {
      // いいね解除
      await updateDoc(ref, { count: increment(-1) });
      localStorage.removeItem(storageKey);
      setLiked(false);
    } else {
      // いいね追加
      if (snap.exists()) {
        await updateDoc(ref, { count: increment(1) });
      } else {
        await setDoc(ref, { count: 1 });
      }
      localStorage.setItem(storageKey, "true");
      setLiked(true);
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handleLike}
      disabled={loading}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 20px",
        border: liked ? "2px solid #e25555" : "2px solid #ccc",
        borderRadius: "999px",
        background: liked ? "#fff0f0" : "#fff",
        color: liked ? "#e25555" : "#666",
        cursor: "pointer",
        fontSize: "1rem",
        transition: "all 0.2s",
      }}
    >
      <span>{liked ? "❤️" : "🤍"}</span>
      <span>{count}</span>
    </button>
  );
}