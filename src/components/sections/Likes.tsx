import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const STORAGE_KEY = "khushbu_portfolio_liked";

export const Likes = () => {
  const [count, setCount] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const [pending, setPending] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setLiked(localStorage.getItem(STORAGE_KEY) === "1");
    fetchCount();
  }, []);

  const fetchCount = async () => {
    const { count } = await supabase
      .from("portfolio_likes")
      .select("*", { count: "exact", head: true });
    setCount(count ?? 0);
  };

  const handleLike = async () => {
    if (liked || pending) return;
    setPending(true);
    const { error } = await supabase.from("portfolio_likes").insert({});
    if (error) {
      toast.error("Couldn't register your like. Try again.");
      setPending(false);
      return;
    }
    localStorage.setItem(STORAGE_KEY, "1");
    setLiked(true);
    setAnimate(true);
    setCount((c) => (c ?? 0) + 1);
    setTimeout(() => setAnimate(false), 600);
    setPending(false);
    toast.success("Thanks for the love! 💛");
  };

  return (
    <section id="likes" className="py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-mono mb-3 text-primary">// show some love</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Liked what you saw?
          </h2>
          <p className="text-muted-foreground mb-10">
            Drop a heart to let me know it resonated — one tap per visitor, and it genuinely makes my day.
          </p>

          <div className="flex flex-col items-center gap-5">
            <button
              onClick={handleLike}
              disabled={liked || pending}
              aria-label={liked ? "You already liked this" : "Like this portfolio"}
              className={`group relative flex h-24 w-24 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                liked
                  ? "border-primary bg-primary/10 cursor-default"
                  : "border-border hover:border-primary hover:bg-primary/5 hover:scale-110 active:scale-95"
              } ${pending ? "opacity-60" : ""}`}
            >
              <Heart
                className={`h-10 w-10 transition-all duration-300 ${
                  liked
                    ? "fill-primary text-primary"
                    : "text-muted-foreground group-hover:text-primary"
                } ${animate ? "scale-125" : ""}`}
              />
              {animate && (
                <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-primary animate-ping" />
              )}
            </button>

            <div className="font-mono">
              <span className="text-4xl font-bold text-foreground">
                {count === null ? "…" : count.toLocaleString()}
              </span>
              <span className="ml-2 text-sm text-muted-foreground">
                {count === 1 ? "like" : "likes"}
              </span>
            </div>

            {liked && (
              <p className="label-mono text-primary animate-fade-in">
                ✓ thanks for your support
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
