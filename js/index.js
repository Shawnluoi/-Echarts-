(function() {
    $(".monitor .tabs").on("click", "a", function() {
        $(this).addClass("active").siblings("a").removeClass("active")
            // 选取对应的索引号

        $(".monitor .content").eq($(this).index()).show().siblings(".content").hide()
    })
})()