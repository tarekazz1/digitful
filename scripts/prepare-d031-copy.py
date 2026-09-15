from pathlib import Path

p = Path('docs/brand/HOMEPAGE-COPY.md')
s = p.read_text()
current = '''### Unclear message

People shouldn’t need a committee meeting to understand what you do.

Approved optional reveal:

`Exactly. Just like this one.`

### Leaky conversion path

Interest is useful. A clear next step is better.

Approved interaction: the path animation stops short of its target, then reveals:

`It was almost there.`

### Slow follow-up

If the next step relies on memory, it probably needs a system.

Approved interaction: clicking starts a short millisecond timer for about 1.25 seconds, then reveals:

`That was only a second.`

`Some leads wait days.`

The timer is demonstrative, not a real delay in access to important information. Reduced-motion users should receive the final state without the counting animation. The animated timer itself should not be repeatedly announced to screen readers; announce only the final message.
'''
normalized = '''### Unclear message

People shouldn’t need a committee meeting to understand what you do.

### Leaky conversion path

Interest is useful. A clear next step is better.

### Slow follow-up

If the next step relies on memory, it probably needs a system.
'''
if current not in s:
    raise SystemExit('Expected current interaction copy block not found')
p.write_text(s.replace(current, normalized, 1))
