import React, { Component } from 'react';

function PromiseNoData(promise, data, error) {
    console.log(data)
    if (promise === null || promise === undefined) {
        console.log("promise")
        return (<span>no data</span>)
    } else if (data === undefined || data === null) {
        console.log("inne i data")
        return ( <img class="loadingSymbol" src="http://www.csc.kth.se/~cristi/loading.gif"/>)
    }else if(data.error !== undefined){
        console.log("quota limit")
        return(<div className="quotaLimit">quota limit, try again!</div>);
    } else if (error != null /* && error !== undefined */) {
        console.log("error")
        return (<span>{error}</span>)
    }
    return false;
}

export default PromiseNoData;