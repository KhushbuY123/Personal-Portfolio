CREATE TABLE public.portfolio_likes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.portfolio_likes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view likes"
  ON public.portfolio_likes
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can add a like"
  ON public.portfolio_likes
  FOR INSERT
  WITH CHECK (true);