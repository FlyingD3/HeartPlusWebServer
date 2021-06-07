import React, { Component } from "react";
import "./Sidebar.css";
import searchIcon from "./icon/search.svg";
import loaderIcon from "../../../../../../utils/loaders/loader-blue.gif";
import { DEFAULT_DISPLAYABLE_ITEMS } from "../../../../../../utils/Const";

class Sidebar extends Component {
  static defaultProps = {
    isLoaded: false,
    vendors: []
  };

  state = {
    crtVendor: "",
    crtFilteredItems: [],
    isSearchMode: false,
    offset: DEFAULT_DISPLAYABLE_ITEMS
  };

  show = () => {
    const { vendors, crtVendor } = this.props;
    const { isSearchMode, crtFilteredItems } = this.state;
    return (
      <>
        <div className="bam-sidebar-input">
          <img src={searchIcon} alt="Search icon" />
          <input
            id="vendor-search"
            type="text"
            placeholder="Search by Vendor"
            onChange={this.handleInput}
          />
        </div>
        <div className="bam-sidebar-items">
          <ul>
            {!isSearchMode
              ? vendors.slice(0, this.state.offset).map((vendor) => {
                  return (
                    <li key={vendor} onClick={() => crtVendor(vendor)}>
                      {vendor}
                    </li>
                  );
                })
              : crtFilteredItems.slice(0, this.state.offset).map((vendor) => {
                  return (
                    <li key={vendor} onClick={() => crtVendor(vendor)}>
                      {vendor}
                    </li>
                  );
                })}
            <li key="load-more" className="br-load-more" onClick={this.more}>
              Load more...
            </li>
          </ul>
        </div>
      </>
    );
  };

  loading = () => {
    return (
      <div className="bam-loader-wrapper">
        <img id="loader-icon" src={loaderIcon} alt="Loading icon" />
      </div>
    );
  };

  search = () => {
    const { vendors } = this.props;

    if (this.state.crtVendor.length === 0)
      this.setState({
        crtFilteredItems: [],
        isSearchMode: false
      });
    else
      this.setState({
        crtFilteredItems: vendors.filter((e) =>
          e.startsWith(this.state.crtVendor)
        ),
        isSearchMode: true
      });
  };

  more = () => {
    this.setState((previous) => {
      return { offset: previous.offset + DEFAULT_DISPLAYABLE_ITEMS };
    });
  };

  handleInput = (e) => {
    this.setState({ crtVendor: e.target.value }, this.search);
  };

  render() {
    return (
      <div className="bam-sidebar">
        <div className="bam-sidebar-header">
          <h4>Browser</h4>
        </div>
        <div className="bam-sidebar-list">
          {this.props.isLoaded ? this.show() : this.loading()}
        </div>
      </div>
    );
  }
}

export default Sidebar;
