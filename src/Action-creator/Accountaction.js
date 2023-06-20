export const depositMoney  = (amount) => {
    return(dispatch) => {
        dispatch({
            type:'Deposit',payload:amount
        })
    }
} 
export const withdrawMoney  = (amount) => {
    return(dispatch) => {
        dispatch({
            type:'Withdraw',payload:amount
        })
    }
} 
export const resetAccount  = (amount) => {
    return(dispatch) => {
        dispatch({
            type:'Reset',payload:0
        })
    }
} 