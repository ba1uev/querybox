var Utils = {
  debounce(fn, delay) {
    console.log('go')
    var timer = null;
    return function () {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  }
};

var QueryBoard = React.createClass({
  getInitialState(){
    return {
      data: null
    }
  },
  submit(query){
    console.log('yas: ', query);
  },
  render(){
    return (
      <div>
        <SearchBox
          submit={this.submit}/>
        <QueryResults data={this.state.data}/>
      </div>
    )
  }
});

class SearchBox extends React.Component{
  constructor() {
    super();
    this.submit = Utils.debounce(this.submit, 400);
  }
  submit(){
    console.log('WWIIW -->', this.refs.searchQuery.value);
  }
  // componentWillMount: function() {
  //   this.submit = Utils.debounce(this.submit,400);
  // },
  handleChange(){
    // componentWillMount(this.refs.searchQuery.value);
    // console.log();
  }
  render(){
    console.log('search loaderd');
    return (
      <div className="searchbox">
        <input
          type="text"
          placeholder="Search"
          ref="searchQuery"
          onChange={this.submit}
        />
        <button onClick={this.submit}>➞</button>
      </div>
    )
  }
};

var QueryResults = React.createClass({
  render(){
    return (
      <div className="resultbox" style={{marginTop: '30px', backgroundColor: 'lightcyan'}}>
        {this.props.data || 'тут будут результаты'}
      </div>
    )
  }
});

(function(){
  ReactDOM.render(
    <QueryBoard/>,
    document.getElementById('cont')
  );
})();

// utils ------------
