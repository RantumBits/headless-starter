import React from 'react'
import ChevronDown from 'react-feather/dist/icons/chevron-down'
import _kebabCase from 'lodash/kebabCase'
import remark from 'remark'
import remarkHTML from 'remark-html'
import './Accordion.css'

export default class Accordion extends React.Component {
  static defaultProps = {
    items: [],
    className: '',
  }

  // use state to auto close but has issues mobile view. onClick={() => this.handleClick(index)}
  // state = {
  //   activeItem: null
  // }
  //
  // handleClick = index => {
  //   this.setState({
  //     activeItem: this.state.activeItem === index ? null : index
  //   })
  // }

  handleClick = event => event.target.classList.toggle('active')

  render() {
    const { items, className } = this.props
    console.log(items)
    return (
      <div className={`Accordion ${className}`}>
        {!!items &&
          items.map((item, index) => (
            <div
              className={`Accordion--item `}
              key={`accordion-item-${_kebabCase(item.title) + '-' + index}`}
              onClick={this.handleClick}
              onKeyDown={this.handleKeyDown}
              role="menuitem"
              tabIndex={0}
            >
              <h2 className="flex">
                <span>{item.title}</span>
                <ChevronDown />
              </h2>
              <div className={'description'}>
                {item.description}
                <div
                  dangerouslySetInnerHTML={{
                    __html: remark()
                      .use(remarkHTML)
                      .processSync(item.content)
                      .toString(),
                  }}
                />
                {item.link && (
                  <div href={item.link} className="button">
                    {item.linkTitle}
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    )
  }
}
