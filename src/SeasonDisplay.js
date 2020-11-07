import React from 'react';

const seasonConfig = {
    summer:{
        text:"Let\'s hit the beach!",
        iconName:'sun'
    },
    winter:{
        text:"Burr it's chilly",
        iconName:'snowflake'
    }
};

const getSeason = (lat,month)=>{
    if(month>=3 && month<=8)
    {
        return lat>0?'summer':'winter';
    }
    else
    {
        return lat>0?'winter':'summer';
    }
}
const SeasonDisplay = (props) => {
    //console.log(props.lat);
    const season = getSeason(props.lat,new Date().getMonth());
    //console.log(season);
    // const seasonCheck = season==='winter'?'Burr, it is chilly':'Let us hit the beach!';
    // const iconCheck = season==='winter'?'snowflake':'sun'
    // const iconText = iconCheck+" icon";
    //<i class="snowflake icon"></i>
    //<i class="sun icon"></i>

    // return(
    //     <div>
    //     <i className={iconText}></i>
    //     <br/><h1>{seasonCheck}</h1>
    //     <br/><i className={`${iconCheck} icon`}></i>
    //     </div>         
    // );


    // const myText = seasonConfig[season].text;
    // const myIconName = seasonConfig[season].iconName;
    // return(
    //     <div>
    //     <i className={`${myIconName} icon`}></i>
    //     <br/><h1>{myText}</h1>
    //     <br/><i className={`${myIconName} icon`}></i>
    //     </div>         
    // );

    const {text,iconName} = seasonConfig[season];//using object destructuring here
    return(
        <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}></i>
        <br/><h1>{text}</h1>
        <br/><i className={`icon-right massive ${iconName} icon`}></i>
        </div>         
    );
    
};

export default SeasonDisplay;