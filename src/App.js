import ActiveNoteContainer from "./components/ActiveNoteContainer";
import ArchiveContainer from "./components/ArchiveContainer";
import CreateNoteForm from "./components/CreateNoteForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import React from 'react';
import { getInitialData } from "./utils";

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
      searchData: '',
      dataList: getInitialData()
    }
  }

  setTitle(data){
    this.setState({
      title: data
    })
  }

  setBody(data){
    this.setState({
      body: data
    })
  }

  addNoteList(data){
    const newData = [...this.state.dataList, data];
    this.setState({
      dataList: newData
    })
  }

  changeArchivedState({id, archived}){
    const newData = [...this.state.dataList];
    newData.filter(data => { return data.id === id }).map(data => { data.archived = archived });
    this.setState({
      dataList: newData
    })
  }

  deleteNote(id){
    const newData = [...this.state.dataList];
    const result = newData.filter(data => { return data.id !== id });
    this.setState({
      dataList: result
    })
  }

  setSearchData(data){
    this.setState({
      searchData: data
    })
  }
  
  render(){
    return (
      <div className="app">
        <div className="page__wrapper">
          <Navbar searchData={ this.state.searchData } setSearchData={ this.setSearchData.bind(this) } />
          <div className="container">
            <CreateNoteForm title={ this.state.title } body={ this.state.body } 
              setTitle={ this.setTitle.bind(this) } setBody={ this.setBody.bind(this) } 
              addNoteList={ this.addNoteList.bind(this) } />
            <ActiveNoteContainer dataList={ 
              this.state.dataList.filter(data => { 
                return !data.archived && (this.state.searchData === '' || data.title.toUpperCase().indexOf(this.state.searchData.toUpperCase()) !== -1 ) }) 
              } 
              changeArchivedState={ this.changeArchivedState.bind(this) }
              deleteNote={ this.deleteNote.bind(this) } />
            <ArchiveContainer dataList={ 
              this.state.dataList.filter(data => { 
                return data.archived && (this.state.searchData === '' || data.title.toUpperCase().indexOf(this.state.searchData.toUpperCase()) !== -1 ) })
              }
              changeArchivedState={ this.changeArchivedState.bind(this) }
              deleteNote={ this.deleteNote.bind(this) } searchData={ this.state.searchData } />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
