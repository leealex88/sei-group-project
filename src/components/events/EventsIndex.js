import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../common/Navbar'


class EventsIndex extends React.Component {
  constructor() {
    super()

    this.state = { events: null }

  }

  componentDidMount() {
    axios.get('/api/events')
      .then(res => this.setState({ events: res.data }))
      .catch(err => console.log(err))
  }

  render() {

    if (!this.state.events) return null

    console.log(this.state)

    return (
      <main >
        <Navbar />
        <section className="frontSection">
          <div className="containerFront">


            <div className="frontSection">

              {this.state.events.map(event => (

                <section key={event._id} className="eachCard">
                  <Link className="links" to={`/events/${event._id}`}>

                    <div>
                      <img src={event.partyImage}/>
                      <span key={event._id}>
                        <h3 key={event._id}>
                          {event.eventName}
                        </h3>
                      </span>
                    </div>
                  </Link>
                  <div className="eventDescriptionCard">
                    <p key={event._id}>
                      {event.description}
                    </p>
                  </div>
                </section>

              ))}

            </div>
          </div>


        </section>
      </main>
    )
  }
}

export default EventsIndex
















// import React from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// import Navbar from '../common/Navbar'
//
//
// class EventsIndex extends React.Component {
//   constructor() {
//     super()
//
//     this.state = { events: null }
//
//   }
//
//
//   componentDidMount() {
//     axios.get('/api/events')
//       .then(res => this.setState({ events: res.data }))
//       .catch(err => console.log(err))
//   }
//
//
//
//
//   render() {
//
//     if (!this.state.events) return null
//
//     console.log(this.state)
//
//     return (
//       <main>
//         <Navbar />
//         <section className="frontSection">
//           <div className="containerFront">
//
//
//             <div className="frontSection">
//
//               {this.state.events.map(event => (
//
//                 <section key={event._id} className="eachCard">
//                   <Link to={`/events/${event._id}`}>
//                     <div>
//                       <img src={event.partyImage}/>
//                       <span key={event._id}>
//                         <h3 key={event._id}>
//                           {event.eventName}
//                         </h3>
//                       </span>
//                     </div>
//                   </Link>
//                 </section>
//
//               ))}
//
//             </div>
//           </div>
//
//
//         </section>
//       </main>
//     )
//   }
// }
//
// export default EventsIndex
