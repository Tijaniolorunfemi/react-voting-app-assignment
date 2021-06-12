import React, { Component } from 'react'
// import logo from './logos.jpg'
import './App.css'
import './easyframer.css'
import './style.css'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            surname: '' ,
            lastname: '',
            dateofbirth:'',
            stateoforigin:'',
            localgovernment:'',
            electionid:'',
            nin:'',
            pollingunit:'',
        }
    }

    handleSurnameChange = event => {
        this.setState({
            surname:event.target.value
        })
    }

    handleLastnameChange = event => {
        this.setState({
            lastname:event.target.value
        })
    }

    handleDateofbirthChange = event => {
        this.setState({
            dateofbirth:event.target.value
        })
    }

    handleStateoforiginChange = event => {
        this.setState({
            stateoforigin:event.target.value
        })
    }

    handleLocalgovernmentChange = event => {
        this.setState({
            localgovernment:event.target.value
        })
    }

    handleElectionidChange = event => {
        this.setState({
            dateofbirth:event.target.value
        })
    }

    handleNinChange = event => {
        this.setState({
            dateofbirth:event.target.value
        })
    }

    handlePlloingunitChange = event => {
        this.setState({
            pollingunit:event.target.value
        })
    }

    handleCandidateChange = event => {
        this.setState({
            candidate:event.target.value
        })
    }

    handleSelectChange = (event,select) => {
        select.preventDefault()
        this.setState({
            select:event.target.value 
        })
    }

    handleSubmit = event => {
        // alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        console.log(`
            ${this.state.surname} 
            ${this.state.lastname} 
            ${this.state.dateofbirth}    
            ${this.state.stateoforigin}    
            ${this.state.localgovernment}    
            ${this.state.electionid}    
            ${this.state.nin}    
            ${this.state.pollingunit}    
            ${this.state.candidate}    
        `)
        event.preventDefault()
    }
    

    render() {
        const {surname,lastname,dateofbirth,stateoforigin,localgovernment,electionid,nin,pollingunit,candidate,select} = this.state
        return (
            <form onSubmit={this.handleSubmit} className="App-header App-logo">
                {/* <img src={logo} className="App-logo" alt="" /> */}
                <p className="App-log"></p>
                <div>
                    <label>SURNAME</label>
                    <input 
                        type="text" 
                        value={surname} 
                        onChange={this.handleSurnameChange}
                    />
                </div>

                <div>
                    <label>LASTNAME</label>
                    <input 
                        type="text" 
                        value={lastname} 
                        onChange={this.handleLastnameChange}
                    />
                </div>
                <div>
                    <label>DATE-OF-BIRTH</label>
                    <input 
                        type="date" 
                        value={dateofbirth} 
                        onChange={this.handleDateofbirthChange}
                    />
                </div>
                <div>
                    <label>STATE-OF-ORIGIN</label>
                    <select value={stateoforigin} onChange={this.handleStateoforiginChange} >
                        <option value={select} onChange={this.handleSelectChange}>LAGOS-STATE</option>
                        <option value={select} onChange={this.handleSelectChange}>LAGOS-STATE</option>
                        <option value={select} onChange={this.handleSelectChange}>LAGOS-STATE</option>
                    </select>
                </div>
                <div>
                    <label>LOCAL-GOVERNMENT</label>
                    <select value={localgovernment}  onChange={this.handleLocalgovernmentChange}>
                        <option value={select} onChange={this.handleSelectChange}>lagos mainland</option>
                        <option value={select} onChange={this.handleSelectChange}>lagos mainland</option>
                        <option value={select} onChange={this.handleSelectChange}>lagos mainland</option>
                    </select>
                </div>
                <div>
                    <label>ELECTION-ID</label>
                    <input 
                        type="text" 
                        value={electionid} 
                        onChange={this.handleElectionidChange}
                    />
                </div>
                <div>
                    <label>NIN-NUMBER</label>
                    <input 
                        type="text" 
                        value={nin} 
                        onChange={this.handleNinChange}
                    />
                </div>
                <div>
                    <label>LASTNAME</label>
                    <input 
                        type="text" 
                        value={pollingunit} 
                        onChange={this.handlePollingunitChange}
                    />
                </div>

                <div>
                    <label >candidate-list</label>
                    <select value={candidate} onChange={this.handleTopicChange}>
                        <option value={select} onChange={this.handleSelectChange} >CANDIDATE-A</option>
                        <option value={select} onChange={this.handleSelectChange} >CANDIDATE-B</option>
                        <option value={select} onChange={this.handleSelectChange}>CANDIDATE-C</option>
                    </select>
                </div>
                <button type="submit" >Submit</button>
            </form>
        )
    }
}

export default Form
