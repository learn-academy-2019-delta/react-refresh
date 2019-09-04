import React from 'react';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Card from 'react-bootstrap/Card'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      search: '',
      shredders: [
        {
          name: "Tony Hawk",
          image: "https://vz.cnwimg.com/thumbc-300x300/wp-content/uploads/2012/07/Bob-Burnquist.jpg"

        },
        {
          name: "Bam Margera",
          image: "https://media.phillyvoice.com/media/images/bam_margera_rehab.6bb66986.fill-735x490.jpg"

        }
      ],
      filteredShredders: []
    }
  }
  
  componentDidMount = ()=>{
    this.setState({filteredShredders: this.state.shredders})
  }
  
  handleSearchUpdate = (e)=>{
    this.setState({search: e.target.value})
  }
  
  filterShredders = ()=>{
    console.log(this.state.search)
    const filteredShredders = this.state.shredders.filter((shredder)=>{
      return shredder.name.match(this.state.search)
    })
    this.setState({filteredShredders})
  }
  render(){
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline>
              <FormControl 
                type="text" 
                placeholder="Search" 
                className="mr-sm-2"
                onChange={this.handleSearchUpdate}
                value={this.state.search}
              />
              <Button 
                variant="outline-success"
                onClick={this.filterShredders}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        
        <div>
          {this.state.filteredShredders.map((shredder, index)=>{
            return(
              <Card key={index} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={shredder.image} />
                <Card.Body>
                  <Card.Title>{shredder.name}</Card.Title>
                </Card.Body>
              </Card>  
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
