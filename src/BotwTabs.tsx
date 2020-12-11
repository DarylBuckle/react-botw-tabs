/* eslint-disable prettier/prettier */
import React from 'react'

// eslint-disable-next-line no-unused-vars
import botwTab from './Classes/BotwTab'

import 'botw-menu.css'

interface IBotwTabsProps {
  tabs: botwTab[],
  activeId?: string,
  defaultActiveId?: string,
  className?: string,
  style?: React.CSSProperties | undefined,
  tabsheetClassName?: string,
  tabsheetStyle?: React.CSSProperties | undefined,
  onChange?: (tab: botwTab) => void,
}

interface IBotwTabsState {
  activeId?: string
}

const initialState: IBotwTabsState = {
  activeId: undefined
}

class BotwTabs extends React.Component<
  IBotwTabsProps,
  IBotwTabsState
> {
  constructor(props: IBotwTabsProps) {
    super(props)
    if (props.defaultActiveId) {
      initialState.activeId = props.defaultActiveId;
    }
    this.state = initialState
  }

  onChange(tab: botwTab) {
    const { activeId, onChange } = this.props;
    if (activeId == null) {
      // Uncontrolled
      this.setState({ activeId: tab.id });
    }
    else {
      // controlled
      if (onChange) {
        onChange(tab);
      }
    }
  }

  render() {
    const { className, style, tabsheetClassName, tabsheetStyle, activeId, tabs } = this.props;
    const uncontrolledActiveId = this.state.activeId;
    const activeTab = activeId != null ? activeId : uncontrolledActiveId;

    let containerClass = "botw-tabs";
    if (className) {
      containerClass += ` ${className}`;
    }
    let tabsheetClass = "botw-tabs-tabsheet";
    if (tabsheetClassName) {
      tabsheetClass += ` ${tabsheetClassName}`;
    }

    let content;
    if (tabs) {
      for (const tab of tabs) {
        if (tab.id === activeTab) {
          content = tab.content;
          break;
        }
      }
    }

    return (
      <div 
        className={containerClass} 
        style={style}
      >
        <div className="botw-tab-menu">
          {tabs ? tabs.map((tab) => {
            return this.renderTab(tab, activeTab === tab.id)
          }) : null}
        </div>
        <div className={tabsheetClass} style={tabsheetStyle}>
          {content}
        </div>
      </div>
    )    
  }

  renderTab(tab: botwTab, active: boolean) {
    let className = "botw-tab-menu-item";
    if (active) {
      className += " active";
    }
    if (tab.className) {
      className += ` ${tab.className}`;
    }

    let img;
    if (tab.faicon) {
      img = tab.faicon
    }
    else {
      if (tab.imgSrc) {
        img = <img src={tab.imgSrc} />
      }
      if (active && tab.activeImgSrc) {
        img = <img src={tab.activeImgSrc} />
      }
    }

    let name = <div>{tab.name}</div>;
    if (img) {
      // If image is present, wrap in a span. Styles hide this unless active.
      name = <span>{tab.name}</span>
    }

    return (
      <button className={className} style={tab.style} title={tab.name} onClick={() => this.onChange(tab)}>
        <div className="tab-name">{name}</div>
        {img ? (
          <div className="tab-img">
            {img}
          </div> 
        ) : null}
        <hr />
      </button>
    )
  }
}

export default BotwTabs
