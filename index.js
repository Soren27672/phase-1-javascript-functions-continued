// code your solution here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = (function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
});

function wrapAdjective(flair) {
    return (function (adjective) {
        console.log(`You are ${flair+' '+adjective+' '+flair}!`);
        return `You are ${flair+adjective+flair}!`;
    });
}

wrapAdjective('>:)')('conniving and desperately evil');