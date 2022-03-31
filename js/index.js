$(function() {
    // 执行代码
    init();

});

function init() {
    setTime();
    setInterval(() => {
        setTime();
    }, 1000)
    $('#startbtn').click(() => {
            $('#startMenu').toggle()
        })
        // $(document).click(()=>{
        //     $('#startMenu').hide()
        // })
    $('#computer').dblclick(() => {
        $('#windows').show();
    })
    $('#close').click(() => {
        $('#windows').hide();
    })
}

function setTime() {
    let now = dayjs(new Date()).format("YYYY/MM/DD HH:mm:ss")
    $('#time').text(now)
}