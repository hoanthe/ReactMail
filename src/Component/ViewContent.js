import React, { Component } from 'react';

class ViewContent extends Component {
    render() {

        let month = this.props.monthContent
        let day = this.props.dayContent
        let number = this.props.numberContent
        let incident = this.props.incidentContent
        let arr = this.props.arrContent

        return (
            <>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Nội Dung Mail</h3>
                    </div>
                    <div className="panel-body">
                        <p></p>
                        <p>関連各位</p>

                        <p>・勤務日時　{month}月{(day === 1) ? day : day + incident}日 14:00 - 22:30</p>

                        <p>　作業内容</p>

                        <p> {arr[0]}　メールを監視・対応しながら、資料確認、。</p>

                        <p> {arr[1]}　休憩、食事。 　</p>

                        <p> {arr[2]}　メールを監視・対応しながら、資料確認、。</p>

                        <p>アラート対応 :  {number} Errors。</p>
                        <p>特にございません。</p>

                        <p>以上です</p>
                        <p>よろしくお願いします。</p>
                        <p>--------------------------------------------------------------- </p>
                    </div>
                </div>

            </>
        )
    }
}

export default ViewContent;