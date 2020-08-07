//Neticeler

const exams = [
    {
        bal: '681 bal',
        qrup: 'II qrup',
        zaman: '48 dəqiqə',
        tarix: '22 iyul 2020, 17:30',
        bax: 'Cavab kartına bax'                
    },
    {
        bal: '602 bal',
        qrup: 'II qrup',
        zaman: '36 dəqiqə',
        tarix: '16 may 2020, 17:30',
        bax: 'Cavab kartına bax'                
    },
    {
        bal: '397 bal',
        qrup: 'II qrup',
        zaman: '63  dəqiqə',
        tarix: '20 iyun 2020, 17:30',
        bax: 'Cavab kartına bax'                
    },
    {
        bal: '401 bal',
        qrup: 'II qrup',
        zaman: '49  dəqiqə',
        tarix: '25 mart 2020, 17:30',
        bax: 'Cavab kartına bax'                
    }
];
const lessons = [
    {
        bal: '58%',
        qrup: 'Azərbaycan dili',
        zaman: '48 dəqiqə',
        tarix: '22 iyul 2020, 17:30',
        bax: 'Cavab kartına bax'                
    },
    {
        bal: '75%',
        qrup: 'İngilis dili',
        zaman: '36 dəqiqə',
        tarix: '16 may 2020, 17:30',
        bax: 'Cavab kartına bax'                
    },
    {
        bal: '75%',
        qrup: 'Riyaziyyat',
        zaman: '63  dəqiqə',
        tarix: '20 iyun 2020, 17:30',
        bax: 'Cavab kartına bax'                
    },
    {
        bal: '53%',
        qrup: 'Azərbaycan dili',
        zaman: '49  dəqiqə',
        tarix: '25 mart 2020, 17:30',
        bax: 'Cavab kartına bax'                
    },
    {
        bal: '53%',
        qrup: 'Azərbaycan dili',
        zaman: '49  dəqiqə',
        tarix: '25 mart 2020, 17:30',
        bax: 'Cavab kartına bax'                
    },
    {
        bal: '53%',
        qrup: 'Kimya',
        zaman: '49  dəqiqə',
        tarix: '25 mart 2020, 17:30',
        bax: 'Cavab kartına bax'                
    },
    {
        bal: '53%',
        qrup: 'Azərbaycan dili',
        zaman: '49  dəqiqə',
        tarix: '25 mart 2020, 17:30',
        bax: 'Cavab kartına bax'                
    },
    {
        bal: '53%',
        qrup: 'Fizika',
        zaman: '49  dəqiqə',
        tarix: '25 mart 2020, 17:30',
        bax: 'Cavab kartına bax'                
    }
];

const examSelector = document.getElementById('exam');
const lessonSelector = document.getElementById('lesson');

examSelector.innerText = `Sınaqlar (${exams.length})`;
lessonSelector.innerText = `Fənnlər üzrə (${lessons.length})`;


const resultContainer = document.getElementById('result');

examSelector.addEventListener('click', function(){
    exams.forEach(item => {
        const resultList = document.createElement('DIV');
        resultList.className = 'result-list'
        resultContainer.appendChild(resultList);
        resultList.innerHTML = `
        <ul>
         <li>${item.bal}</li>
         <li>${item.qrup}</li>
         <li>${item.zaman}</li>
         <li>${item.tarix}</li>
         <li>${item.bax}</li>
        </ul>
        `
     })
});
lessonSelector.addEventListener('click', function() {
    lessons.forEach(item => {
        const resultList = document.createElement('DIV');
        resultList.className = 'result-list'
        resultContainer.appendChild(resultList);
        resultList.innerHTML = `
        <ul>
         <li>${item.bal}</li>
         <li>${item.qrup}</li>
         <li>${item.zaman}</li>
         <li>${item.tarix}</li>
         <li>${item.bax}</li>
        </ul>
        `
     })

});


const resultFilter = document.getElementById('resultFilter');
const timeFilter = document.getElementById('timeFilter');
const dateFilter = document.getElementById('dateFilter');


function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}



