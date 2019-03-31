import * as React from 'react'
import { Calendar, OptionsInput } from '@fullcalendar/core'

export default class FullCalendar extends React.Component<OptionsInput, any> {

  private elRef: any = React.createRef()
  private calendar: Calendar

  componentDidMount() {
    this.calendar = new Calendar(this.elRef.current, this.props)
    this.calendar.render()
  }

  componentWillReceiveProps(nextProps) {
    this.calendar.destroy()
    this.calendar = new Calendar(this.elRef.current, nextProps)
    this.calendar.render()
  }

  render() {
    return (
      <div ref={this.elRef}></div>
    )
  }

  // TODO: unmount!?

  getApi(): Calendar {
    return this.calendar
  }

}
