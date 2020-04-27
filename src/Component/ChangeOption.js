import React, { Component } from 'react';

class ChangeOption extends Component {

    onInputName = (event) => {
        this.props.onInputNameChange(event)
    }

    onInput = (event) => {
        this.props.onInputChange(event)
    }
    render() {
        return (
            <>
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">Mail Server</h3>
                        </div>
                        <div className="panel-body">

                            <div className="input-group box">
                                <div className="input-group-addon"><span>Tên</span></div>
                                <input type="text"
                                    onChange={(event) => this.onInputName(event)}
                                    className="form-control"
                                    id="exampleInputAmountName"
                                    placeholder="Name" />
                            </div>

                            <div className="input-group box">
                                <div className="input-group-addon"><span>Số lượng lỗi</span></div>
                                <input type="text"
                                    onChange={(event) => this.onInput(event)}
                                    className="form-control"
                                    id="exampleInputAmount"
                                    placeholder="Number" />
                            </div>


                            <div className="radio">
                                <label>
                                    <input type="radio"
                                        name="first_Sec"
                                        id="input"
                                        value="first"
                                        onClick={(event) => this.onChangeWork(event)}
                                    // Minh họa ví dụ cho dễ hiểu checked đang ở đâu
                                    // checked={this.state.first_Sec === 'first'}
                                    />
                                    Mail Trước
                                </label><br />
                                <label>
                                    <input type="radio"
                                        name="first_Sec"
                                        id="input"
                                        value="second"
                                        onClick={(event) => this.onChangeWork(event)}
                                    // Minh họa ví dụ cho dễ hiểu checked đang ở đâu
                                    // checked={this.state.first_Sec === 'second'}
                                    />
                                    Mail Sau
                                </label>
                            </div>

                            {/* <select  id="input" className="form-control" onChange = { (event) => this.onChangeWork(event)} >
              <option name="first_Sec" value="first" >-- Mail Trước --</option>
              <option name="first_Sec" value="second" >-- Mail Sau --</option>
            </select> */}




                            <div className="box">
                                <button onClick={(event) => this.onShow(event)}
                                    type="button"
                                    className="btn btn-primary box-btn"
                                    name="1"
                                >Ca 1</button>
                                <button onClick={(event) => this.onShow(event)}
                                    type="button"
                                    className="btn btn-primary box-btn"
                                    name="2"
                                >Ca 2</button>
                                <button onClick={(event) => this.onShow(event)}
                                    type="button"
                                    className="btn btn-primary box-btn"
                                    name="3"
                                >Ca 3</button>
                            </div>
                        </div>
                    </div>

            </>
        )
    }
}

export default ChangeOption;