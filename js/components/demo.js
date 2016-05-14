const Demo = React.createClass({
  propTypes: {
    theme: React.PropTypes.string.isRequired,
    results: React.PropTypes.array.isRequired,
    mouseEnter: React.PropTypes.func.isRequired,
    handleQueryChange: React.PropTypes.func.isRequired,
  },
  cssUrl () {
    const user = this.props.theme.split('/')[0];
    const repo = this.props.theme.split('/')[1];
    return 'http://' + user + '.github.io/' + repo + '/dist/main.css';
  },
  handleQueryChange (event) {
    const query = event.target.value
    this.props.handleQueryChange(query)
  },
  mouseEnter (index) {
    this.props.mouseEnter(index)
  },
  render () {
    return (
      <section id="zazu">
        <div>
          <input
            className="mousetrap"
            type="text"
            onChange={this.handleQueryChange}
            placeholder="Search.." />
          <ul>
            { this.props.results.map((result, i) => {
              if (!result.show) { return }
              return (
                <li
                  key={i}
                  onMouseEnter={() => { this.mouseEnter(i) }}
                  className={ result.className }>
                  <img src={ result.icon } alt='' />
                  <h2>{ result.title }</h2>
                  { result.subtitle &&
                    <h3>{ result.subtitle }</h3> }
                </li>
              )
            }) }
          </ul>
        </div>
        <link href={this.cssUrl()} rel='stylesheet' type='text/css' />
      </section>
    )
  }
})

module.exports = Demo