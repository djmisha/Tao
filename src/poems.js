import React from 'react';
import data from './poemData.json';
import iconrandom from './images/icon-random.svg';
import iconall from './images/icon-all.svg';
import iconnext from './images/icon-next.svg';
import iconprev from './images/icon-prev.svg';
import iconsearch from './images/icon-search.svg';


/* Get Our Data into an Array from JSON FORMAT*/
let parsedData = data.poems;
const dataArray = [];

for (let i = 0; i < parsedData.length; i++) {
  dataArray.push(parsedData[i]);
}

class SinglePoemRow extends React.Component {
  render() {
    const number = this.props.number;
    const content = this.props.content;
    const className = this.props.className;
    return (
      <li id={number} className={className}>
      <span>{number}</span>
      {content}
      </li>
    );
  }
}

class PoemsTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const visiblePoem = this.props.visiblePoem;
    const poemRows = [];

    dataArray.forEach((poem) => {

      /*Looks for matching Text*/

      if (poem.content.indexOf(filterText) === -1) {
        return;
      }

      /*Looks for visible Poem*/

      if (visiblePoem === poem.number ) {
       poemRows.push(
        <SinglePoemRow number={poem.number} content={poem.content}
        key={poem.number} className='visiblePoem'
        />
        );
     }

     if (visiblePoem === 'all' ) {
       poemRows.push(
        <SinglePoemRow number={poem.number} content={poem.content}
        key={poem.number} className='visiblePoem'
        />
        );
     }

      // poemRows.push(
      //   <SinglePoemRow number={poem.number} content={poem.content}
      //   key={poem.number} className='visiblePoem'
      //   />
      //);

    });

    return (
      <ul className='all-poems'>
      {poemRows}
      </ul>
    );
  }
}

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchClass: "nav-search nav-hidden",
    };
    this.handleSearchFilterTextChange = this.handleSearchFilterTextChange.bind(this);
    this.handleRandomPoemChange = this.handleRandomPoemChange.bind(this);
    this.handleShowAllPoemChange = this.handleShowAllPoemChange.bind(this);
    this.handleNextPoemChange = this.handleNextPoemChange.bind(this);
    this.handlePrevPoemChange = this.handlePrevPoemChange.bind(this);
    this.handleSearchOpen = this.handleSearchOpen.bind(this);
  }

  handleRandomPoemChange() {
    this.props.onRandomButtonGenerate();
  }

  handleShowAllPoemChange() {
    this.props.onShowAllButtonClick();
  }

  handlePrevPoemChange() {
    this.props.onPrevPoemButtonClick(this.props.visiblePoem);
  }

  handleNextPoemChange() {
    this.props.onNextPoemButtonClick(this.props.visiblePoem);
  }

  handleSearchFilterTextChange(e) {
    this.props.onSearchFilterTextChange(e.target.value);
  }

  handleSearchOpen() {
    const change = this.state.searchClass === 'nav-search nav-hidden' ? 'nav-search nav-visible' : 'nav-search nav-hidden';
    
    this.setState({
      searchClass: change,
    })
  }

  render() {
    return (
      <form>
      <label>
      <span>Search</span>
      <img src={iconsearch} className="nav-icon" alt="Search"
      onClick={this.handleSearchOpen}
      />
      <input
      type="text"
      placeholder="Search..."
      value={this.props.filterText}
      onChange={this.handleSearchFilterTextChange}
      className={this.state.searchClass}
      />
      </label>

      <div 
      onClick={this.handleShowAllPoemChange}
      className='nav-all'
      ><img src={iconall} className="nav-icon" alt="All" />
      <span>See All</span>
      </div>

      <div 
      onClick={this.handlePrevPoemChange}
      className='nav-prev'
      >
      <img src={iconprev} className="nav-icon" alt="Prev" />
      </div>

      <div 
      className='nav-count'
      >{this.props.visiblePoem}
      </div>

      <div 
      onClick={this.handleNextPoemChange}
      className='nav-next'
      >
      <img src={iconnext} className="nav-icon" alt="Next" /></div>

      <div 
      onClick={this.handleRandomPoemChange}
      className='nav-random'
      >
      <img src={iconrandom} className="nav-icon" alt="Random" />
      <span>Random</span>
      </div>

      </form>
    )
  }
}

class FileteredPoemsTable extends React.Component {
  constructor(props) {
    super(props);
    const randNumber = Math.floor(Math.random() * dataArray.length) + 1;
    this.state = {
      filterText: '',
      visiblePoem: randNumber,
    };
    this.handleSearchFilterTextChange = this.handleSearchFilterTextChange.bind(this);
    this.handleRandomPoemChange = this.handleRandomPoemChange.bind(this);
    this.handleShowAllPoemChange = this.handleShowAllPoemChange.bind(this);
    this.handleNextPoemChange = this.handleNextPoemChange.bind(this);
    this.handlePrevPoemChange = this.handlePrevPoemChange.bind(this);
  }

  handleSearchFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleRandomPoemChange(visiblePoem) {
    const randNumber = Math.floor(Math.random() * dataArray.length) + 1;
    this.setState({
      visiblePoem: randNumber,
      filterText: '',
    });
  }

  handleShowAllPoemChange() {
    this.setState({
      visiblePoem: 'all'
    })
  }

  handleNextPoemChange(visiblePoem) {
    if (visiblePoem === dataArray.length || visiblePoem === 'all') {
      visiblePoem = 1;
    }    
    else {
      visiblePoem = visiblePoem + 1;
    }
    this.setState({
      visiblePoem: visiblePoem,
      filterText: '',
    })
  }

  handlePrevPoemChange(visiblePoem) {
    if (visiblePoem === 1 || visiblePoem === 'all') {
      visiblePoem = dataArray.length;
    }
    else {
      visiblePoem = visiblePoem - 1;
    }
    this.setState({
      visiblePoem: visiblePoem,
      filterText: '',
    })
  }

  render() {
    return (
      <div>
      <NavigationBar 
      visiblePoem={this.state.visiblePoem}
      filterText={this.state.filterText}
      onSearchFilterTextChange={this.handleSearchFilterTextChange}
      onRandomButtonGenerate={this.handleRandomPoemChange}
      onShowAllButtonClick={this.handleShowAllPoemChange}
      onNextPoemButtonClick={this.handleNextPoemChange}
      onPrevPoemButtonClick={this.handlePrevPoemChange}
      />
      <PoemsTable 
      poems={this.props.poems}
      filterText={this.state.filterText}
      visiblePoem={this.state.visiblePoem}
      />
      </div>
    )
  }
}

/* Final Render where we pass in our data as props of FilteredPoemsTable*/

class FinalRender extends React.Component {
  render() {
    return (
      <div>
      <FileteredPoemsTable poems={dataArray} />
      </div>
    )
  }
}

export default FinalRender;