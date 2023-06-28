    // line chart
    let ctx2 = document.getElementById("lineChart1").getContext("2d");
    Chart.defaults.color = '#FFF';
    let chartdata = {
        type: "line",
        data: {
            labels: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
            datasets: [{
                label: "臺南公墓數量（個）",
                data: [1418, 1426, 1433, 1445, 1439, 1425, 1421, 1416, 1413, 1410, 1446, 1420, 1410, 1402, 1398, 1384, 1374, 1361, 1369, 1361, 1351],
                fill: false,
                borderColor: "#ffc107",
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            legend: {
                labels: {
                    fontColor: "#DDDDDD",
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: '#DDDDDD'
                    },
                }],
                xAxes: [{
                    ticks: {
                        fontColor: '#DDDDDD'
                    },
                }]
            }
        }
    };

    let inView = false;
    let inView2 = false;
    $(function () {
        $(window).scroll(function () {
            let scrolled = $(window).scrollTop();
            let winh = $(window).height();
            let objpos = $("#lineChart1").offset().top;
            if (objpos < scrolled + winh * 0.5 && !inView2) {
                new Chart(ctx2, chartdata);
                inView2 = true;
            }
        });
    });

    let ctx3 = document.getElementById("lineChart2").getContext("2d");
    let chartdata2 = {
        type: "line",
        data: {
            labels: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
            datasets: [{
                label: "臺南土葬面積（公頃）",
                data: [50761054, 46338511, 50257853, 46776695, 47953187, 47443466, 47100011, 43300602, 43319561, 43714305, 44633256, 45733220, 45534121, 45717169, 45583571, 45219742, 44895748, 44367402, 44222108, 44282128, 44126271],
                fill: false,
                borderColor: "#0dcaf0",
                // color: "#332323",
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            legend: {
                labels: {
                    fontColor: "#DDDDDD",
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: '#DDDDDD'
                    },
                }],
                xAxes: [{
                    ticks: {
                        fontColor: '#DDDDDD'
                    },
                }]
            }
        }
    };

    let inView3 = false;
    let inView4 = false;
    $(function () {
        $(window).scroll(function () {
            let scrolled = $(window).scrollTop();
            let winh = $(window).height();
            let objpos = $("#lineChart2").offset().top;
            if (objpos < scrolled + winh * 0.5 && !inView4) {
                new Chart(ctx3, chartdata2);
                inView4 = true;
            }
        });
    });