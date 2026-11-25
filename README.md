[![make.fun · u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![rank](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/ujang201/funniest-ooo-reply-hamsyh/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/leaderboard)
[![reward](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/ujang201/funniest-ooo-reply-hamsyh/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)

# Funniest One-Line Out-of-Office Reply

One original line of plain text: an out-of-office reply with a boomerang joke — the sender did the most responsible thing possible, answered every email, then immediately fled before anyone could answer back. No beach, no inbox pile-up, no "limited access": just a person who finished the job and ran.

## The entry

> Out of office until Monday — I answered every email, then left before anyone could answer me back.

## Run

```sh
node main.ts
```

This writes the entry line to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` when `OUTPUT_DIR` is set). The output is deterministic: every run writes the same bytes, with no trailing newline, so the file's character count is the line's character count. The program also self-checks the gate itself — it refuses to write a line outside 1–160 characters, only white space, or more than one line.
