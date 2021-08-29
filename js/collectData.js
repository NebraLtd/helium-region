function hereWeGo(){
    var v = $("#country_selector_code").countrySelect("getSelectedCountryData");
    var fq;
    var countryName;
    for(let i = 0; i < 245; i++){
        if(allData[i].countryCode.toLowerCase() == v.iso2 ){
            fq = allData[i].frequency;
            countryName = allData[i].countryName;
            break;
        }
    }
    if(!fq || fq.length === 0){
        document.getElementById("finalString").innerHTML = countryName + " is not supported";
        document.getElementById("finalValue").innerHTML = "";
    }
    else{
        document.getElementById("finalString").innerHTML = "The region for " + countryName + " is " + fq;
        document.getElementById("finalValue").innerHTML = "The proper frequency for your selected region is " + fq.substr(2,fq.length);
    }
}

window.hereWeGo = hereWeGo;
