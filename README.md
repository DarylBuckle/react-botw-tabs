# react-botw-tabs

> A tab sheet component styled like Zelda: Breath of the Wild menus.

[![NPM](https://img.shields.io/npm/v/react-botw-tabs.svg)](https://www.npmjs.com/package/react-botw-tabs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


<img lt="react-botw-tabs" src="https://user-images.githubusercontent.com/15156674/101959886-21d0dc00-3bfe-11eb-9756-d3c101faefa2.png">


## Contents

* [Install](#install)
* [Usage](#usage)
* [Props](#props)
* [License](#license)

<br/>


## Install

```bash
npm install --save react-botw-tabs
```

Peer Dependencies;
* React v16 +

## Usage

```tsx
import React, { Component } from 'react'

import { BotwTabs } from 'react-botw-tabs'

class Example extends Component {
  render() {
    return (
      <BotwTabs
        defaultActiveId={"pencil"}
        tabs={[
          {
            id: "pencil",
            name: "Pencil",
            faicon: <i className="fa fa-pencil" />,
            content: (
              <div style={{ textAlign: "center" }}>
                <h3>This is the Pencil tab.</h3>
              </div>
            )
          },
          {
            id: "bomb",
            name: "Bomb",
            faicon: <i className="fa fa-bomb" />,
            content: (
              <div style={{ textAlign: "center" }}>
                <h3>This is the Bomb tab.</h3>
              </div>
            )
          }
        ]}
      />
    )
  }
}
```

Examples at [https://darylbuckle.github.io/react-botw-tabs](https://darylbuckle.github.io/react-botw-tabs).

Example with other botw-menu components at [https://darylbuckle.github.io/react-botw-menu-components](https://darylbuckle.github.io/react-botw-menu-components).


## Props

#### BotwTabs

| Property | Type | Default | Mandatory | Description |
| -------- |------| --------| ----------| ------------|
|    tabs | botwTab[]  |  | true | The tabs to display. This also includes the tab content. |
|    activeId | string  |  | false | If controlling the active tab, this is the id of the current active tab. |
|    defaultActiveId | string  |  | false | If uncontrolled, this is the id of the default active tab. |
|    onChange | (tab) => void  |  | false | A callback for when a new tab is selected. |
|    className | string  |  | false | Additional css classes for the container. |
|    style | React.CSSProperties  |  | false | Additional styles for the container. |
|    tabsheetClassName | string  |  | false | Additional css classes for the tab content container. |
|    tabsheetStyle | React.CSSProperties  |  | false | Additional styles for the tab content container. |


#### botwTab class

| Property | Type | Default | Mandatory | Description |
| -------- |------| --------| ----------| ------------|
|    id | string  |  | true | Unique identifier for the tab. |
|    name | string  |  | true | The name of the tab. |
|    imgSrc | string  |  | false | Src of the image. |
|    activeImgSrc | string  |  | false | Override the image source when active. |
|    faicon | any  |  | false | Alternative to ImgSrc. Allows JSX to be used for the image (e.g font awesome icons) |
|    className | string  |  | false | Additional css classes for the tab. |
|    style | React.CSSProperties  |  | false | Additional styles for the tab. |
|    content | Any JSX  |  | false | The actual content of the tab. This is rendered if the tab is selected. It's rendered underneath the tab sheet. |


<br/>


## License

MIT © [DarylBuckle](https://github.com/DarylBuckle) 2020