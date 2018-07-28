
![logo](https://github.com/lyutkin/turbo-scss/raw/master/logo.png)

<br />

`turbo-scss` is a helper set of composable human-readable CSS classes. Stay calm and don’t ever repeat those frequent declarations.

- [Features](#features)
- [Getting started](#getting-started)
- [Docs](#docs)
- [Reference](#reference)
<br />

# Features

:sunglasses: Modular and build-agnostic with SCSS. Grab what you need and be good to go.  
:sunglasses: Standalone with no third-party dependencies like `normalize`, `sanitize`, `reset` etc.  
:sunglasses: Handful of utility-classes. This is not a whole set of every CSS rule, just most useful ones.  
:sunglasses: Mobile-first breakpoints for vital classes: `576px`, `768px`, `992px`, `1200px` and `1600px`.  
:sunglasses: New era with `12` column CSS grid and flexbox.  
:sunglasses: Prefixed for browsers with `>1%` of usage.

:sweat_smile: No old junk tweaks like `clearfix`, IE `filter` etc.  
:sweat_smile: No any `!important` statement on any rule (except of `2` debug classes). So if you want to, you can handle styling the hard way in some cases.  
:sweat_smile: No styling of basic HTML elements.  
:sweat_smile: No ugly unreadable class name abbreviations like `mb1`, `fz4`, `ws-n` etc. Put the clarity over the brevity.

<br />

# Getting started

- Just drop `turbo.css` or minified `turbo.min.css` in your project like so:

```html
<head>
	<link rel="stylesheet" href="turbo.min.css">
</head>
```

<br />

- To customize the build, install it via `npm`:

```bash
npm install turbo-scss
```

# Docs
- Responsiveness: [Breakpoint support](#breakpoint-support)  
- Content flow: [Box sizing](#box-sizing), [Display](#display), [Flex](#flex), [Grid](#grid), [Overflow](#overflow), [Float](#float), [Position](#position), [Z-index](#z-index), [Toggle](#toggle)  
- Sizing: [Width](#width), [Height](#height)  
- Spacing: [Margin](#margin), [Padding](#padding)  
- Interaction: [Hover](#hover), [Cursor](#cursor), [Pointer events](#pointer-events), [User select](#user-select)  
- Appearance: [Opacity](#opacity), [Background position](#background-position), [Background size](#background-size), [Background repeat](#background-repeat), [Background color](#background-color), [Background attachment](#background-attachment), [Border radius](#border-radius), [Border width](#border-width), [Border style](#border-style), [Border color](#border-color), [Transform](#transform)  
- Text: [Font family](#font-family), [Font size](#font-size), [Font style](#font-style), [Font weight](#font-weight), [Letter spacing](#letter-spacing), [Line height](#line-height), [Vertical align](#vertical-align), [White space](#white-space), [Word break](#word-break), [Text transform](#text-transform), [Text decoration](#text-decoration), [Text align](#text-align), [Color](#color), [Typography](#typography)  
- Misc: [Reset](#reset), [Debug](#debug)

<br />

### Breakpoint support
[↑ Back to contents](#docs)

Certain classes have mobile-first breakpoint trigger to activate the rule. Such classes are marked with :heavy_check_mark: symbol in according table column. That means class can have a specific suffix, indicating from which breakpoint it should work.

<br />

Breakpoint list:

| Suffix  | Description | Media query  |
| - | - | - |
| `sm` | Smartphone | `@media screen and (min-width: 576px)` |
| `md` | Tablet | `@media screen and (min-width: 768px)` |
| `lg` | Desktop | `@media screen and (min-width: 992px)` |
| `xl` | Wide desktop | `@media screen and (min-width: 1200px)` |
| `xxl` | Huge desktop | `@media screen and (min-width: 1600px)` |

<br />

Usage examples:

| Class  | Description |
| - | - |
| `grid-gap-4--xxl` | With `1600px` viewport width and above, set `grid-gap: 2rem`  |
| `width-50--lg` | With `992px` viewport width and above, set `width: 50%`  |
| `hidden--md` | With `768px` viewport width and above, set `display: none`  |

<br />

### Box sizing
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `border-box` | `box-sizing: border-box` | :x: |
| `content-box` | `box-sizing: content-box` | :x: |

<br />

### Display
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `block` | `display: block` | :heavy_check_mark: |
| `inline-block` | `display: inline-block` | :heavy_check_mark: |
| `inline` | `display: inline` | :heavy_check_mark: |
| `table` | `display: table` | :heavy_check_mark: |
| `table-cell` | `display: table-cell` | :heavy_check_mark: |
| `flex` | `display: flex` | :heavy_check_mark: |
| `inline-flex` | `display: inline-flex` | :heavy_check_mark: |
| `grid` | `display: grid`<br />`grid-template-columns: repeat(12, 1fr)` | :heavy_check_mark: |
| `hidden` | `display: none;` | :heavy_check_mark: |

<br />

### Flex
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `justify-start` | `justify-content: flex-start` | :heavy_check_mark: |
| `justify-end` | `justify-content: flex-end` | :heavy_check_mark: |
| `justify-center` | `justify-content: center` | :heavy_check_mark: |
| `justify-between` | `justify-content: space-between` | :heavy_check_mark: |
| `justify-around` | `justify-content: space-around` | :heavy_check_mark: |
| `items-start` | `align-items: flex-start` | :heavy_check_mark: |
| `items-end` | `align-items: flex-end` | :heavy_check_mark: |
| `items-center` | `align-items: center` | :heavy_check_mark: |
| `items-baseline` | `align-items: baseline` | :heavy_check_mark: |
| `items-stretch` | `align-items: stretch` | :heavy_check_mark: |
| `flex-column` | `flex-direction: column` | :heavy_check_mark: |
| `flex-row` | `flex-direction: row` | :heavy_check_mark: |
| `flex-wrap` | `flex-wrap: wrap` | :heavy_check_mark: |
| `flex-nowrap` | `flex-wrap: nowrap` | :heavy_check_mark: |
| `flex-wrap-reverse` | `flex-wrap: wrap-reverse` | :heavy_check_mark: |
| `flex-column-reverse` | `flex-direction: column-reverse` | :heavy_check_mark: |
| `flex-row-reverse` | `flex-direction: row-reverse` | :heavy_check_mark: |
| `self-start` | `align-self: flex-start` | :heavy_check_mark: |
| `self-end` | `align-self: flex-end` | :heavy_check_mark: |
| `self-center` | `align-self: center` | :heavy_check_mark: |
| `self-baseline` | `align-self: baseline` | :heavy_check_mark: |
| `self-stretch` | `align-self: stretch;` | :heavy_check_mark: |
| `content-start` | `align-content: flex-start` | :heavy_check_mark: |
| `content-end` | `align-content: flex-end` | :heavy_check_mark: |
| `content-center` | `align-content: center` | :heavy_check_mark: |
| `content-between` | `align-content: space-between` | :heavy_check_mark: |
| `content-around` | `align-content: space-around` | :heavy_check_mark: |
| `content-stretch` | `align-content: stretch` | :heavy_check_mark: |
| `flex-no-grow` | `flex-grow: 0` | :heavy_check_mark: |
| `flex-grow` | `flex-grow: 1` | :heavy_check_mark: |
| `flex-no-shrink` | `flex-shrink: 0` | :heavy_check_mark: |
| `flex-shrink` | `flex-shrink: 1` | :heavy_check_mark: |
| `flex-basis-auto` | `flex-basis: auto` | :heavy_check_mark: |
| `flex-no-basis` | `flex-basis: 0` | :heavy_check_mark: |

<br />

### Grid
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `grid-column-1` | `grid-column: span 1 / span 1` | :heavy_check_mark: |
| `grid-column-2` | `grid-column: span 2 / span 2` | :heavy_check_mark: |
| `grid-column-3` | `grid-column: span 3 / span 3` | :heavy_check_mark: |
| `grid-column-4` | `grid-column: span 4 / span 4` | :heavy_check_mark: |
| `grid-column-5` | `grid-column: span 5 / span 5` | :heavy_check_mark: |
| `grid-column-6` | `grid-column: span 6 / span 6` | :heavy_check_mark: |
| `grid-column-7` | `grid-column: span 7 / span 7` | :heavy_check_mark: |
| `grid-column-8` | `grid-column: span 8 / span 8` | :heavy_check_mark: |
| `grid-column-9` | `grid-column: span 9 / span 9` | :heavy_check_mark: |
| `grid-column-10` | `grid-column: span 10 / span 10` | :heavy_check_mark: |
| `grid-column-11` | `grid-column: span 11 / span 11` | :heavy_check_mark: |
| `grid-column-12` | `grid-column: span 12 / span 12` | :heavy_check_mark: |
| `grid-column-gap-1` | `grid-column-gap: 0.25rem` | :heavy_check_mark: |
| `grid-column-gap-2` | `grid-column-gap: 0.5rem` | :heavy_check_mark: |
| `grid-column-gap-3` | `grid-column-gap: 1rem` | :heavy_check_mark: |
| `grid-column-gap-4` | `grid-column-gap: 2rem` | :heavy_check_mark: |
| `grid-column-gap-5` | `grid-column-gap: 3rem` | :heavy_check_mark: |
| `grid-column-gap-6` | `grid-column-gap: 4rem` | :heavy_check_mark: |
| `grid-column-gap-7` | `grid-column-gap: 5rem` | :heavy_check_mark: |
| `grid-column-gap-8` | `grid-column-gap: 6rem` | :heavy_check_mark: |
| `grid-row-gap-1` | `grid-row-gap: 0.25rem` | :heavy_check_mark: |
| `grid-row-gap-2` | `grid-row-gap: 0.5rem` | :heavy_check_mark: |
| `grid-row-gap-3` | `grid-row-gap: 1rem` | :heavy_check_mark: |
| `grid-row-gap-4` | `grid-row-gap: 2rem` | :heavy_check_mark: |
| `grid-row-gap-5` | `grid-row-gap: 3rem` | :heavy_check_mark: |
| `grid-row-gap-6` | `grid-row-gap: 4rem` | :heavy_check_mark: |
| `grid-row-gap-7` | `grid-row-gap: 5rem` | :heavy_check_mark: |
| `grid-row-gap-8` | `grid-row-gap: 6rem` | :heavy_check_mark: |
| `grid-gap-1` | `grid-gap: 0.25rem` | :heavy_check_mark: |
| `grid-gap-2` | `grid-gap: 0.5rem` | :heavy_check_mark: |
| `grid-gap-3` | `grid-gap: 1rem` | :heavy_check_mark: |
| `grid-gap-4` | `grid-gap: 2rem` | :heavy_check_mark: |
| `grid-gap-5` | `grid-gap: 3rem` | :heavy_check_mark: |
| `grid-gap-6` | `grid-gap: 4rem` | :heavy_check_mark: |
| `grid-gap-7` | `grid-gap: 5rem` | :heavy_check_mark: |
| `grid-gap-8` | `grid-gap: 6rem` | :heavy_check_mark: |

<br />

### Overflow
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `overflow-hidden` | `overflow: hidden` | :heavy_check_mark: |
| `overflow-scroll` | `overflow: scroll` | :heavy_check_mark: |
| `overflow-auto` | `overflow: auto` | :heavy_check_mark: |
| `overflow-x-hidden` | `overflow-x: hidden` | :heavy_check_mark: |
| `overflow-x-scroll` | `overflow-x: scroll` | :heavy_check_mark: |
| `overflow-x-auto` | `overflow-x: auto` | :heavy_check_mark: |
| `overflow-y-hidden` | `overflow-y: hidden` | :heavy_check_mark: |
| `overflow-y-scroll` | `overflow-y: scroll` | :heavy_check_mark: |
| `overflow-y-auto` | `overflow-y: auto` | :heavy_check_mark: |

<br />

### Float
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `float-left` | `float: left` | :heavy_check_mark: |
| `float-right` | `float: right` | :heavy_check_mark: |
| `float-none` | `float: none` | :heavy_check_mark: |

<br />

### Position
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `relative` | `position: relative` | :heavy_check_mark: |
| `absolute` | `position: absolute` | :heavy_check_mark: |
| `top-0` | `top: 0` | :heavy_check_mark: |
| `right-0` | `right: 0` | :heavy_check_mark: |
| `bottom-0` | `bottom: 0` | :heavy_check_mark: |
| `left-0` | `left: 0` | :heavy_check_mark: |
| `top-full` | `top: 100%` | :heavy_check_mark: |
| `right-full` | `right: 100%` | :heavy_check_mark: |
| `bottom-full` | `bottom: 100%` | :heavy_check_mark: |
| `left-full` | `left: 100%` | :heavy_check_mark: |
| `fixed` | `position: fixed` | :heavy_check_mark: |
| `fill` | `top: 0`<br />`right: 0`<br />`bottom: 0`<br />`left: 0` | :heavy_check_mark: |
| `center-x` | `left: 50%`<br />`transform: translateX(-50%)` | :heavy_check_mark: |
| `center-y` | `top: 50%`<br />`transform: translateY(-50%)` | :heavy_check_mark: |
| `center` | `top: 50%`<br />`left: 50%`<br />`transform: translate(-50%, -50%)` | :heavy_check_mark: |

<br />

### Z-index
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `z-0` | `z-index: 0` | :x: |
| `z-1` | `z-index: 1` | :x: |
| `z-2` | `z-index: 2` | :x: |
| `z-3` | `z-index: 3` | :x: |
| `z-4` | `z-index: 4` | :x: |
| `z-5` | `z-index: 5` | :x: |
| `z-6` | `z-index: 6` | :x: |
| `z-7` | `z-index: 7` | :x: |
| `z-8` | `z-index: 8` | :x: |
| `z-9` | `z-index: 9` | :x: |
| `z-10` | `z-index: 10` | :x: |
| `z-max` | `z-index: 2147483647` | :x: |

<br />

### Toggle
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `toggle-control` | Toggle `toggle-content` somewhere after it <sup>1</sup> | :x: |

1.
  ```css
.toggle-control:checked ~ .toggle-content {
  display: block;
}
 ```

<br />

### Width
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `max-width-full` | `max-width: 100%` | :heavy_check_mark: |
| `min-width-none` | `min-width: 0` | :heavy_check_mark: |
| `min-width-full` | `min-width: 100%` | :heavy_check_mark: |
| `width-full` | `width: 100%` | :heavy_check_mark: |
| `width-auto` | `width: auto` | :heavy_check_mark: |
| `width-5` | `width: 5%` | :heavy_check_mark: |
| `width-10` | `width: 10%` | :heavy_check_mark: |
| `width-15` | `width: 15%` | :heavy_check_mark: |
| `width-20` | `width: 20%` | :heavy_check_mark: |
| `width-25` | `width: 25%` | :heavy_check_mark: |
| `width-30` | `width: 30%` | :heavy_check_mark: |
| `width-35` | `width: 35%` | :heavy_check_mark: |
| `width-40` | `width: 40%` | :heavy_check_mark: |
| `width-45` | `width: 45%` | :heavy_check_mark: |
| `width-50` | `width: 50%` | :heavy_check_mark: |
| `width-55` | `width: 55%` | :heavy_check_mark: |
| `width-60` | `width: 60%` | :heavy_check_mark: |
| `width-65` | `width: 65%` | :heavy_check_mark: |
| `width-70` | `width: 70%` | :heavy_check_mark: |
| `width-75` | `width: 75%` | :heavy_check_mark: |
| `width-80` | `width: 80%` | :heavy_check_mark: |
| `width-85` | `width: 85%` | :heavy_check_mark: |
| `width-90` | `width: 90%` | :heavy_check_mark: |
| `width-95` | `width: 95%` | :heavy_check_mark: |

<br />

### Height
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `max-height-full` | `max-height: 100%` | :heavy_check_mark: |
| `min-height-full` | `min-height: 100%` | :heavy_check_mark: |
| `height-full` | `height: 100%` | :heavy_check_mark: |

<br />

### Margin
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `margin-top-0` | `margin-top: 0` | :heavy_check_mark: |
| `margin-top-1` | `margin-top: 0.25rem` | :heavy_check_mark: |
| `margin-top-2` | `margin-top: 0.5rem` | :heavy_check_mark: |
| `margin-top-3` | `margin-top: 1rem` | :heavy_check_mark: |
| `margin-top-4` | `margin-top: 2rem` | :heavy_check_mark: |
| `margin-top-5` | `margin-top: 4rem` | :heavy_check_mark: |
| `margin-top-6` | `margin-top: 8rem` | :heavy_check_mark: |
| `margin-right-0` | `margin-right: 0` | :heavy_check_mark: |
| `margin-right-1` | `margin-right: 0.25rem` | :heavy_check_mark: |
| `margin-right-2` | `margin-right: 0.5rem` | :heavy_check_mark: |
| `margin-right-3` | `margin-right: 1rem` | :heavy_check_mark: |
| `margin-right-4` | `margin-right: 2rem` | :heavy_check_mark: |
| `margin-right-5` | `margin-right: 4rem` | :heavy_check_mark: |
| `margin-right-6` | `margin-right: 8rem` | :heavy_check_mark: |
| `margin-bottom-0` | `margin-bottom: 0` | :heavy_check_mark: |
| `margin-bottom-1` | `margin-bottom: 0.25rem` | :heavy_check_mark: |
| `margin-bottom-2` | `margin-bottom: 0.5rem` | :heavy_check_mark: |
| `margin-bottom-3` | `margin-bottom: 1rem` | :heavy_check_mark: |
| `margin-bottom-4` | `margin-bottom: 2rem` | :heavy_check_mark: |
| `margin-bottom-5` | `margin-bottom: 4rem` | :heavy_check_mark: |
| `margin-bottom-6` | `margin-bottom: 8rem` | :heavy_check_mark: |
| `margin-left-0` | `margin-left: 0` | :heavy_check_mark: |
| `margin-left-1` | `margin-left: 0.25rem` | :heavy_check_mark: |
| `margin-left-2` | `margin-left: 0.5rem` | :heavy_check_mark: |
| `margin-left-3` | `margin-left: 1rem` | :heavy_check_mark: |
| `margin-left-4` | `margin-left: 2rem` | :heavy_check_mark: |
| `margin-left-5` | `margin-left: 4rem` | :heavy_check_mark: |
| `margin-left-6` | `margin-left: 8rem` | :heavy_check_mark: |
| `margin-x-0` | `margin-left: 0`<br />`margin-right: 0` | :heavy_check_mark: |
| `margin-x-1` | `margin-left: 0.25rem`<br />`margin-right: 0.25rem` | :heavy_check_mark: |
| `margin-x-2` | `margin-left: 0.5rem`<br />`margin-right: 0.5rem` | :heavy_check_mark: |
| `margin-x-3` | `margin-left: 1rem`<br />`margin-right: 1rem` | :heavy_check_mark: |
| `margin-x-4` | `margin-left: 2rem`<br />`margin-right: 2rem` | :heavy_check_mark: |
| `margin-x-5` | `margin-left: 4rem`<br />`margin-right: 4rem` | :heavy_check_mark: |
| `margin-x-6` | `margin-left: 8rem`<br />`margin-right: 8rem` | :heavy_check_mark: |
| `margin-y-0` | `margin-top: 0`<br />`margin-bottom: 0` | :heavy_check_mark: |
| `margin-y-1` | `margin-top: 0.25rem`<br />`margin-bottom: 0.25rem` | :heavy_check_mark: |
| `margin-y-2` | `margin-top: 0.5rem`<br />`margin-bottom: 0.5rem` | :heavy_check_mark: |
| `margin-y-3` | `margin-top: 1rem`<br />`margin-bottom: 1rem` | :heavy_check_mark: |
| `margin-y-4` | `margin-top: 2rem`<br />`margin-bottom: 2rem` | :heavy_check_mark: |
| `margin-y-5` | `margin-top: 4rem`<br />`margin-bottom: 4rem` | :heavy_check_mark: |
| `margin-y-6` | `margin-top: 8rem`<br />`margin-bottom: 8rem` | :heavy_check_mark: |
| `margin-x-auto` | `margin-left: auto`<br />`margin-right: auto` | :heavy_check_mark: |
| `margin-y-auto` | `margin-top: auto`<br />`margin-bottom: auto` | :heavy_check_mark: |

<br />

### Padding
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `padding-top-0` | `padding-top: 0` | :heavy_check_mark: |
| `padding-top-1` | `padding-top: 0.25rem` | :heavy_check_mark: |
| `padding-top-2` | `padding-top: 0.5rem` | :heavy_check_mark: |
| `padding-top-3` | `padding-top: 1rem` | :heavy_check_mark: |
| `padding-top-4` | `padding-top: 2rem` | :heavy_check_mark: |
| `padding-top-5` | `padding-top: 4rem` | :heavy_check_mark: |
| `padding-top-6` | `padding-top: 8rem` | :heavy_check_mark: |
| `padding-right-0` | `padding-right: 0` | :heavy_check_mark: |
| `padding-right-1` | `padding-right: 0.25rem` | :heavy_check_mark: |
| `padding-right-2` | `padding-right: 0.5rem` | :heavy_check_mark: |
| `padding-right-3` | `padding-right: 1rem` | :heavy_check_mark: |
| `padding-right-4` | `padding-right: 2rem` | :heavy_check_mark: |
| `padding-right-5` | `padding-right: 4rem` | :heavy_check_mark: |
| `padding-right-6` | `padding-right: 8rem` | :heavy_check_mark: |
| `padding-bottom-0` | `padding-bottom: 0` | :heavy_check_mark: |
| `padding-bottom-1` | `padding-bottom: 0.25rem` | :heavy_check_mark: |
| `padding-bottom-2` | `padding-bottom: 0.5rem` | :heavy_check_mark: |
| `padding-bottom-3` | `padding-bottom: 1rem` | :heavy_check_mark: |
| `padding-bottom-4` | `padding-bottom: 2rem` | :heavy_check_mark: |
| `padding-bottom-5` | `padding-bottom: 4rem` | :heavy_check_mark: |
| `padding-bottom-6` | `padding-bottom: 8rem` | :heavy_check_mark: |
| `padding-left-0` | `padding-left: 0` | :heavy_check_mark: |
| `padding-left-1` | `padding-left: 0.25rem` | :heavy_check_mark: |
| `padding-left-2` | `padding-left: 0.5rem` | :heavy_check_mark: |
| `padding-left-3` | `padding-left: 1rem` | :heavy_check_mark: |
| `padding-left-4` | `padding-left: 2rem` | :heavy_check_mark: |
| `padding-left-5` | `padding-left: 4rem` | :heavy_check_mark: |
| `padding-left-6` | `padding-left: 8rem` | :heavy_check_mark: |
| `padding-x-0` | `padding-left: 0`<br />`padding-right: 0` | :heavy_check_mark: |
| `padding-x-1` | `padding-left: 0.25rem`<br />`padding-right: 0.25rem` | :heavy_check_mark: |
| `padding-x-2` | `padding-left: 0.5rem`<br />`padding-right: 0.5rem` | :heavy_check_mark: |
| `padding-x-3` | `padding-left: 1rem`<br />`padding-right: 1rem` | :heavy_check_mark: |
| `padding-x-4` | `padding-left: 2rem`<br />`padding-right: 2rem` | :heavy_check_mark: |
| `padding-x-5` | `padding-left: 4rem`<br />`padding-right: 4rem` | :heavy_check_mark: |
| `padding-x-6` | `padding-left: 8rem`<br />`padding-right: 8rem` | :heavy_check_mark: |
| `padding-y-0` | `padding-top: 0`<br />`padding-bottom: 0` | :heavy_check_mark: |
| `padding-y-1` | `padding-top: 0.25rem`<br />`padding-bottom: 0.25rem` | :heavy_check_mark: |
| `padding-y-2` | `padding-top: 0.5rem`<br />`padding-bottom: 0.5rem` | :heavy_check_mark: |
| `padding-y-3` | `padding-top: 1rem`<br />`padding-bottom: 1rem` | :heavy_check_mark: |
| `padding-y-4` | `padding-top: 2rem`<br />`padding-bottom: 2rem` | :heavy_check_mark: |
| `padding-y-5` | `padding-top: 4rem`<br />`padding-bottom: 4rem` | :heavy_check_mark: |
| `padding-y-6` | `padding-top: 8rem`<br />`padding-bottom: 8rem` | :heavy_check_mark: |

<br />

### Hover
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `dim` | Change opacity on `hover`/`focus`/`active` <sup>1</sup> | :x: |
| `shade` | Darken background color on `hover`/`focus`/`active` <sup>2</sup> | :x: |

1.
```css
.dim:hover,
.dim:focus {
	opacity: 0.75;
}

.dim:active {
	opacity: 1;
}
 ```

2.
```css
.shade:hover,
.shade:focus {
	background-color: rgba(0, 0, 0, 0.05);
}

.shade:active {
	background-color: transparent;
}
 ```

<br />

### Cursor
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `cursor-auto` | `cursor: auto` | :x: |
| `cursor-default` | `cursor: default` | :x: |
| `cursor-pointer` | `cursor: pointer` | :x: |
| `cursor-wait` | `cursor: wait` | :x: |
| `cursor-progress` | `cursor: progress` | :x: |
| `cursor-not-allowed` | `cursor: not-allowed` | :x: |
| `cursor-help` | `cursor: help` | :x: |
| `cursor-none` | `cursor: none` | :x: |

<br />

### Pointer events
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `pointer-events-auto` | `pointer-events: auto` | :x: |
| `pointer-events-none` | `pointer-events: none` | :x: |

<br />

### User select
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `user-select-none` | `user-select: none` | :x: |

<br />

### Opacity
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `transparent` | `opacity: 0` | :x: |
| `opacity-5` | `opacity: 0.05` | :x: |
| `opacity-10` | `opacity: 0.1` | :x: |
| `opacity-15` | `opacity: 0.15` | :x: |
| `opacity-20` | `opacity: 0.2` | :x: |
| `opacity-25` | `opacity: 0.25` | :x: |
| `opacity-30` | `opacity: 0.35` | :x: |
| `opacity-35` | `opacity: 0.35` | :x: |
| `opacity-40` | `opacity: 0.4` | :x: |
| `opacity-45` | `opacity: 0.45` | :x: |
| `opacity-50` | `opacity: 0.5` | :x: |
| `opacity-55` | `opacity: 0.55` | :x: |
| `opacity-60` | `opacity: 0.6` | :x: |
| `opacity-65` | `opacity: 0.65` | :x: |
| `opacity-70` | `opacity: 0.7` | :x: |
| `opacity-75` | `opacity: 0.75` | :x: |
| `opacity-80` | `opacity: 0.8` | :x: |
| `opacity-85` | `opacity: 0.85` | :x: |
| `opacity-90` | `opacity: 0.9` | :x: |
| `opacity-95` | `opacity: 0.95` | :x: |
| `opacity-100` | `opacity: 1` | :x: |

<br />

### Background position
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `bg-center` | `background-position: center center` | :x: |
| `bg-top` | `background-position: center top` | :x: |
| `bg-right` | `background-position: right center` | :x: |
| `bg-bottom` | `background-position: center bottom` | :x: |
| `bg-left` | `background-position: left center` | :x: |

<br />

### Background size
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `bg-cover` | `background-size: cover` | :x: |
| `bg-contain` | `background-size: contain` | :x: |
| `bg-width-full` | `background-size: 100% auto` | :x: |
| `bg-height-full` | `background-size: auto 100%` | :x: |

<br />

### Background repeat
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `bg-no-repeat` | `background-repeat: no-repeat` | :x: |

<br />

### Background color
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `bg-black` | `background-color: black` | :x: |
| `bg-black-95` | `background-color: rgba(0, 0, 0, 0.95)` | :x: |
| `bg-black-90` | `background-color: rgba(0, 0, 0, 0.9)` | :x: |
| `bg-black-85` | `background-color: rgba(0, 0, 0, 0.85)` | :x: |
| `bg-black-80` | `background-color: rgba(0, 0, 0, 0.8)` | :x: |
| `bg-black-75` | `background-color: rgba(0, 0, 0, 0.75)` | :x: |
| `bg-black-70` | `background-color: rgba(0, 0, 0, 0.7)` | :x: |
| `bg-black-65` | `background-color: rgba(0, 0, 0, 0.65)` | :x: |
| `bg-black-60` | `background-color: rgba(0, 0, 0, 0.6)` | :x: |
| `bg-black-55` | `background-color: rgba(0, 0, 0, 0.55)` | :x: |
| `bg-black-50` | `background-color: rgba(0, 0, 0, 0.5)` | :x: |
| `bg-black-45` | `background-color: rgba(0, 0, 0, 0.45)` | :x: |
| `bg-black-40` | `background-color: rgba(0, 0, 0, 0.4)` | :x: |
| `bg-black-35` | `background-color: rgba(0, 0, 0, 0.35)` | :x: |
| `bg-black-30` | `background-color: rgba(0, 0, 0, 0.35)` | :x: |
| `bg-black-25` | `background-color: rgba(0, 0, 0, 0.25)` | :x: |
| `bg-black-20` | `background-color: rgba(0, 0, 0, 0.2)` | :x: |
| `bg-black-15` | `background-color: rgba(0, 0, 0, 0.15)` | :x: |
| `bg-black-10` | `background-color: rgba(0, 0, 0, 0.1)` | :x: |
| `bg-black-5` | `background-color: rgba(0, 0, 0, 0.05)` | :x: |
| `bg-white` | `background-color: white` | :x: |
| `bg-white-95` | `background-color: rgba(255, 255, 255, 0.95)` | :x: |
| `bg-white-90` | `background-color: rgba(255, 255, 255, 0.9)` | :x: |
| `bg-white-85` | `background-color: rgba(255, 255, 255, 0.85)` | :x: |
| `bg-white-80` | `background-color: rgba(255, 255, 255, 0.8)` | :x: |
| `bg-white-75` | `background-color: rgba(255, 255, 255, 0.75)` | :x: |
| `bg-white-70` | `background-color: rgba(255, 255, 255, 0.7)` | :x: |
| `bg-white-65` | `background-color: rgba(255, 255, 255, 0.65)` | :x: |
| `bg-white-60` | `background-color: rgba(255, 255, 255, 0.6)` | :x: |
| `bg-white-55` | `background-color: rgba(255, 255, 255, 0.55)` | :x: |
| `bg-white-50` | `background-color: rgba(255, 255, 255, 0.5)` | :x: |
| `bg-white-45` | `background-color: rgba(255, 255, 255, 0.45)` | :x: |
| `bg-white-40` | `background-color: rgba(255, 255, 255, 0.4)` | :x: |
| `bg-white-35` | `background-color: rgba(255, 255, 255, 0.35)` | :x: |
| `bg-white-30` | `background-color: rgba(255, 255, 255, 0.35)` | :x: |
| `bg-white-25` | `background-color: rgba(255, 255, 255, 0.25)` | :x: |
| `bg-white-20` | `background-color: rgba(255, 255, 255, 0.2)` | :x: |
| `bg-white-15` | `background-color: rgba(255, 255, 255, 0.15)` | :x: |
| `bg-white-10` | `background-color: rgba(255, 255, 255, 0.1)` | :x: |
| `bg-white-5` | `background-color: rgba(255, 255, 255, 0.05)` | :x: |

<br />

### Background attachment
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `bg-fixed` | `background-attachment: fixed` | :x: |

<br />

### Border radius
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `border-round` | `border-radius: 100%` | :x: |
| `border-rounded-1` | `border-radius: 0.125rem` | :x: |
| `border-rounded-2` | `border-radius: 0.25rem` | :x: |
| `border-rounded-3` | `border-radius: 0.5rem` | :x: |
| `border-rounded-max` | `border-radius: 9999px` | :x: |

<br />

### Border width
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `border-1` | `border-width: 1px` | :x: |
| `border-2` | `border-width: 2px` | :x: |
| `border-3` | `border-width: 3px` | :x: |
| `border-bottom-1` | `border-top-width: 0;`<br />`border-right-width: 0;`<br />`border-bottom-width: 1px;`<br />`border-left-width: 0;` | :x: |
| `border-bottom-2` | `border-top-width: 0;`<br />`border-right-width: 0;`<br />`border-bottom-width: 2px;`<br />`border-left-width: 0;` | :x: |
| `border-bottom-3` | `border-top-width: 0;`<br />`border-right-width: 0;`<br />`border-bottom-width: 3px;`<br />`border-left-width: 0;` | :x: |

<br />

### Border style
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `border-solid` | `border-style: solid` | :x: |
| `border-dashed` | `border-style: dashed` | :x: |
| `border-dotted` | `border-style: dotted` | :x: |

<br />

### Border color
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `border-black` | `border-color: black` | :x: |
| `border-black-95` | `border-color: rgba(0, 0, 0, 0.95)` | :x: |
| `border-black-90` | `border-color: rgba(0, 0, 0, 0.9)` | :x: |
| `border-black-85` | `border-color: rgba(0, 0, 0, 0.85)` | :x: |
| `border-black-80` | `border-color: rgba(0, 0, 0, 0.8)` | :x: |
| `border-black-75` | `border-color: rgba(0, 0, 0, 0.75)` | :x: |
| `border-black-70` | `border-color: rgba(0, 0, 0, 0.7)` | :x: |
| `border-black-65` | `border-color: rgba(0, 0, 0, 0.65)` | :x: |
| `border-black-60` | `border-color: rgba(0, 0, 0, 0.6)` | :x: |
| `border-black-55` | `border-color: rgba(0, 0, 0, 0.55)` | :x: |
| `border-black-50` | `border-color: rgba(0, 0, 0, 0.5)` | :x: |
| `border-black-45` | `border-color: rgba(0, 0, 0, 0.45)` | :x: |
| `border-black-40` | `border-color: rgba(0, 0, 0, 0.4)` | :x: |
| `border-black-35` | `border-color: rgba(0, 0, 0, 0.35)` | :x: |
| `border-black-30` | `border-color: rgba(0, 0, 0, 0.35)` | :x: |
| `border-black-25` | `border-color: rgba(0, 0, 0, 0.25)` | :x: |
| `border-black-20` | `border-color: rgba(0, 0, 0, 0.2)` | :x: |
| `border-black-15` | `border-color: rgba(0, 0, 0, 0.15)` | :x: |
| `border-black-10` | `border-color: rgba(0, 0, 0, 0.1)` | :x: |
| `border-black-5` | `border-color: rgba(0, 0, 0, 0.05)` | :x: |
| `border-white` | `border-color: white` | :x: |
| `border-white-95` | `border-color: rgba(255, 255, 255, 0.95)` | :x: |
| `border-white-90` | `border-color: rgba(255, 255, 255, 0.9)` | :x: |
| `border-white-85` | `border-color: rgba(255, 255, 255, 0.85)` | :x: |
| `border-white-80` | `border-color: rgba(255, 255, 255, 0.8)` | :x: |
| `border-white-75` | `border-color: rgba(255, 255, 255, 0.75)` | :x: |
| `border-white-70` | `border-color: rgba(255, 255, 255, 0.7)` | :x: |
| `border-white-65` | `border-color: rgba(255, 255, 255, 0.65)` | :x: |
| `border-white-60` | `border-color: rgba(255, 255, 255, 0.6)` | :x: |
| `border-white-55` | `border-color: rgba(255, 255, 255, 0.55)` | :x: |
| `border-white-50` | `border-color: rgba(255, 255, 255, 0.5)` | :x: |
| `border-white-45` | `border-color: rgba(255, 255, 255, 0.45)` | :x: |
| `border-white-40` | `border-color: rgba(255, 255, 255, 0.4)` | :x: |
| `border-white-35` | `border-color: rgba(255, 255, 255, 0.35)` | :x: |
| `border-white-30` | `border-color: rgba(255, 255, 255, 0.35)` | :x: |
| `border-white-25` | `border-color: rgba(255, 255, 255, 0.25)` | :x: |
| `border-white-20` | `border-color: rgba(255, 255, 255, 0.2)` | :x: |
| `border-white-15` | `border-color: rgba(255, 255, 255, 0.15)` | :x: |
| `border-white-10` | `border-color: rgba(255, 255, 255, 0.1)` | :x: |
| `border-white-5` | `border-color: rgba(255, 255, 255, 0.05)` | :x: |

<br />

### Transform
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `flip-x` | `transform: scaleX(-1)` | :x: |
| `flip-y` | `transform: scaleY(-1)` | :x: |

<br />

### Font family
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `font-serif` | `font-family: serif` | :x: |
| `font-sans` | `font-family: sans-serif` | :x: |
| `font-mono` | `font-family: monospace` | :x: |

<br />

### Font size
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `font-xs` | `font-size: 0.75rem` | :heavy_check_mark: |
| `font-sm` | `font-size: 0.875rem` | :heavy_check_mark: |
| `font-normal` | `font-size: 1rem` | :heavy_check_mark: |
| `font-lg` | `font-size: 1.25rem` | :heavy_check_mark: |
| `font-xl` | `font-size: 1.5rem` | :heavy_check_mark: |
| `font-2xl` | `font-size: 1.875rem` | :heavy_check_mark: |
| `font-3xl` | `font-size: 2.25rem` | :heavy_check_mark: |
| `font-4xl` | `font-size: 3rem` | :heavy_check_mark: |
| `font-5xl` | `font-size: 4rem` | :heavy_check_mark: |

<br />

### Font style
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `font-style-normal` | `font-style: normal` | :x: |
| `font-italic` | `font-style: italic` | :x: |

<br />

### Font weight
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `font-weight-normal` | `font-weight: normal` | :x: |
| `font-bold` | `font-weight: bold` | :x: |
| `font-weight-100` | `font-weight: 100` | :x: |
| `font-weight-200` | `font-weight: 200` | :x: |
| `font-weight-300` | `font-weight: 300` | :x: |
| `font-weight-400` | `font-weight: 400` | :x: |
| `font-weight-500` | `font-weight: 500` | :x: |
| `font-weight-600` | `font-weight: 600` | :x: |
| `font-weight-700` | `font-weight: 700` | :x: |
| `font-weight-800` | `font-weight: 800` | :x: |
| `font-weight-900` | `font-weight: 900` | :x: |

<br />

### Letter spacing
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `tracking-tight` | `letter-spacing: -0.05em` | :x: |
| `tracking-normal` | `letter-spacing: 0` | :x: |
| `tracking-wide` | `letter-spacing: 0.05em` | :x: |
| `tracking-huge` | `letter-spacing: 0.1em` | :x: |

<br />

### Line height
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `leading-none` | `line-height: 1` | :x: |
| `leading-tight` | `line-height: 1.25` | :x: |
| `leading-normal` | `line-height: 1.5` | :x: |
| `leading-loose` | `line-height: 2` | :x: |

<br />

### Vertical align
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `vertical-top` | `vertical-align: top` | :x: |
| `vertical-middle` | `vertical-align: middle` | :x: |
| `vertical-bottom` | `vertical-align: bottom` | :x: |
| `vertical-baseline` | `vertical-align: baseline` | :x: |

<br />

### White space
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `space-normal` | `white-space: normal` | :x: |
| `space-nowrap` | `white-space: nowrap` | :x: |
| `space-pre` | `white-space: pre` | :x: |

<br />

### Word break
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `word-normal` | `word-break: normal` | :x: |
 | `word-break` | `word-break: break-all` | :x: |
| `word-keep` | `word-break: keep-all` | :x: |

<br />

### Text transform
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `text-upper` | `text-transform: uppercase` | :x: |
| `text-lower` | `text-transform: lowercase` | :x: |
| `text-transform-none` | `text-transform: none` | :x: |

<br />

### Text decoration
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `text-underline` | `text-decoration: underline` | :x: |
| `text-overline` | `text-decoration: overline` | :x: |
| `text-decoration-none` | `text-decoration: none` | :x: |

<br />

### Text align
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `text-center` | `text-align: center` | :heavy_check_mark: |
| `text-left` | `text-align: left` | :heavy_check_mark: |
| `text-right` | `text-align: right` | :heavy_check_mark: |

<br />

### Color
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `color-black` | `color: black` | :x: |
| `color-black-95` | `color: rgba(0, 0, 0, 0.95)` | :x: |
| `color-black-90` | `color: rgba(0, 0, 0, 0.9)` | :x: |
| `color-black-85` | `color: rgba(0, 0, 0, 0.85)` | :x: |
| `color-black-80` | `color: rgba(0, 0, 0, 0.8)` | :x: |
| `color-black-75` | `color: rgba(0, 0, 0, 0.75)` | :x: |
| `color-black-70` | `color: rgba(0, 0, 0, 0.7)` | :x: |
| `color-black-65` | `color: rgba(0, 0, 0, 0.65)` | :x: |
| `color-black-60` | `color: rgba(0, 0, 0, 0.6)` | :x: |
| `color-black-55` | `color: rgba(0, 0, 0, 0.55)` | :x: |
| `color-black-50` | `color: rgba(0, 0, 0, 0.5)` | :x: |
| `color-black-45` | `color: rgba(0, 0, 0, 0.45)` | :x: |
| `color-black-40` | `color: rgba(0, 0, 0, 0.4)` | :x: |
| `color-black-35` | `color: rgba(0, 0, 0, 0.35)` | :x: |
| `color-black-30` | `color: rgba(0, 0, 0, 0.35)` | :x: |
| `color-black-25` | `color: rgba(0, 0, 0, 0.25)` | :x: |
| `color-black-20` | `color: rgba(0, 0, 0, 0.2)` | :x: |
| `color-black-15` | `color: rgba(0, 0, 0, 0.15)` | :x: |
| `color-black-10` | `color: rgba(0, 0, 0, 0.1)` | :x: |
| `color-black-5` | `color: rgba(0, 0, 0, 0.05)` | :x: |
| `color-white` | `color: white` | :x: |
| `color-white-95` | `color: rgba(255, 255, 255, 0.95)` | :x: |
| `color-white-90` | `color: rgba(255, 255, 255, 0.9)` | :x: |
| `color-white-85` | `color: rgba(255, 255, 255, 0.85)` | :x: |
| `color-white-80` | `color: rgba(255, 255, 255, 0.8)` | :x: |
| `color-white-75` | `color: rgba(255, 255, 255, 0.75)` | :x: |
| `color-white-70` | `color: rgba(255, 255, 255, 0.7)` | :x: |
| `color-white-65` | `color: rgba(255, 255, 255, 0.65)` | :x: |
| `color-white-60` | `color: rgba(255, 255, 255, 0.6)` | :x: |
| `color-white-55` | `color: rgba(255, 255, 255, 0.55)` | :x: |
| `color-white-50` | `color: rgba(255, 255, 255, 0.5)` | :x: |
| `color-white-45` | `color: rgba(255, 255, 255, 0.45)` | :x: |
| `color-white-40` | `color: rgba(255, 255, 255, 0.4)` | :x: |
| `color-white-35` | `color: rgba(255, 255, 255, 0.35)` | :x: |
| `color-white-30` | `color: rgba(255, 255, 255, 0.35)` | :x: |
| `color-white-25` | `color: rgba(255, 255, 255, 0.25)` | :x: |
| `color-white-20` | `color: rgba(255, 255, 255, 0.2)` | :x: |
| `color-white-15` | `color: rgba(255, 255, 255, 0.15)` | :x: |
| `color-white-10` | `color: rgba(255, 255, 255, 0.1)` | :x: |
| `color-white-5` | `color: rgba(255, 255, 255, 0.05)` | :x: |

<br />

### Typography
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `text-indent` | Indent first letter with no block `margin` or `padding` <sup>1</sup> | :x: |
| `text-small-caps` | `font-variant: small-caps` | :x: |
| `text-truncate` | Show trailing dots on text overflow <sup>2</sup> | :x: |

1.
  ```css
.text-indent {
	text-indent: 1em;
	margin-top: 0;
	margin-bottom: 0;
}
 ```

2.
  ```css
.text-truncate {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
 ```

<br />

### Reset
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `table-fixed` | `table-layout: fixed` | :x: |
| `table-collapse` | `border-collapse: collapse`<br />`border-spacing: 0` | :x: |
| `list-reset` | `list-style: none` | :x: |

<br />

### Debug
[↑ Back to contents](#docs)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `debug` | `outline: 1px solid red !important` | :x: |
| `debug-grid` | `background: url("data:image/gif;base64,R0lGODdhEAAQAPEAAADw/wDx/xXy/////ywAAAAAEAAQAAACIZyPKckYDQFsb6ZqD85jZ2+BkwiRFKehhqQCQgDHcgwEBQA7") !important` | :x: |

<br />

# Reference

- `turbo-scss` is heavily inspired by [tachyons](https://tachyons.io/), [tailwind](https://tailwindcss.com/), [basscss](http://basscss.com/) and [blueprint](https://blueprintcss.io/).
- Fan vector object in logo by [Stan Diers](https://thenounproject.com/stan.diers/).
