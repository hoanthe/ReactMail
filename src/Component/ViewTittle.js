import React, { Component } from 'react';

class ViewTittle extends Component {
    render() {
        let year = this.props.yearTittle
        let month = this.props.monthTittle
        let day = this.props.dayTittle
        let incident = this.props.incidentTittle
 
        let nameTittle = this.props.nameTittle
        return (
            <>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Tiêu đề</h3>
                    </div>
                    <div className="panel-body">
                        <p>作業日報 {nameTittle} {year}/{month}/{(day === 1) ? day : day + incident}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default ViewTittle;