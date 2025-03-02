#Working with overflow in CSS

##Key values:

Overflow:

- `visible` - (default)Content overflows beyond the block.
- `hidden` - Hides overflowing content. This is a key detail! Content exists in the DOM and can be scrolled through JavaScript:
  element.scrollTo(0, 100); // Прокручує на 100px вниз
  element.scrollLeft = 50; // Прокрутка по горизонталі
- `scroll` - Adds a scrollbar regardless of necessity.
- `auto` - Adds a scrollbar only if content overflows.
- `clip` - Crops the content as hidden, but does not allow scrolling.

##Scrolling in One Direction:

- `overflow-x: scroll; overflow-y: hidden` only horizontal scrolling.
- `overflow-y: scroll; overflow-x: hidden` only vertical scrolling.
- `overflow: hidden` disables any scrolling.
- `white-space: nowrap` prevents text wrapping for horizontal scrolling.
  overflow-x and overflow-y can be dynamically changed using JavaScript.

##Overflow vs. Overflow-wrap: Key Differences

overflow controls what happens when content exceeds its container's dimensions:

- `Controls visibility and scrolling behavior`
- `Applies to all content types (text, images, etc.)`
- `Manages content that extends beyond the box boundaries`
- `Primarily handles spatial overflow in both directions`

overflow-wrap (formerly word-wrap) specifically controls text wrapping behavior:

- `Only applies to text content`
- `Determines how/when long words break`
- `Prevents text from overflowing its container by allowing word breaks`
- `Does not affect scrolling behavior`
- `Common values: normal, break-word, anywhere`
