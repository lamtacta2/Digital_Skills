const left = document.getElementById("btn0")
const right = document.getElementById("btn6")
const contenta = document.getElementById('contenta')
const titlea = document.getElementById('titlea')
const a1 = document.getElementById('1')
const a2 = document.getElementById('2')
const a3 = document.getElementById('3')
const a4 = document.getElementById('4')
const a5 = document.getElementById('5')

a1.style.color = '#ffffff';

let i=1

right.addEventListener('click', () => {
    
    if(i<5){
        i++;
    } 
    else{
        i = 1;
    }

    if(i == 1){
        a1.style.color = '#ffffff';
        a2.style.color = '#afafaf';
        a3.style.color = '#afafaf';
        a4.style.color = '#afafaf';
        a5.style.color = '#afafaf';
        contenta.innerText = "Bạn sẽ được đánh giá dựa trên 1 tập các câu hỏi về những kỹ năng cần thiết như tìm kiếm, truy cập, điều khiển các nội dung số (tập tin, thư mục, website, thông tin trên internet,…..) ở các dạng khác nhau. Đồng thời có thể so sánh các nguồn tài nguyên thông tin khác nhau và hiểu được thông tin nào là đúng, có ích. Khả năng lưu trữ, quản lý, tổ chức tốt cấu trúc thư mục và nhiều loại tập tin khác nhau cũng là 1 phần năng lực trong kỹ năng số."
        titlea.innerText = "Kỹ năng xử lý thông tin và dữ liệu "

    }else if(i == 2){
        a2.style.color = '#ffffff';
        a1.style.color = '#afafaf';
        a3.style.color = '#afafaf';
        a4.style.color = '#afafaf';
        a5.style.color = '#afafaf';
        contenta.innerText = "You will be tested on the set of skills needed to use digital technologies to interact, communicate and collaborate with other people. This also includes being able to participate in society through use of public and private digital services. The ability to manage one’s identity and reputation on the web is part of this competence area as well."
        titlea.innerText = "Kỹ năng giao tiếp và hợp tác"
    }else if(i == 3){
        a3.style.color = '#ffffff';
        a2.style.color = '#afafaf';
        a1.style.color = '#afafaf';
        a4.style.color = '#afafaf';
        a5.style.color = '#afafaf';
        contenta.innerText = "You will be tested on the set of skills needed to create and edit various types of digital content, including text and multimedia files. This includes skills necessary to improve and integrate different kinds of information and content together. The abilities to understand how copyright and licences work and how to develop instructions for a computing system are part of this competence area as well."
        titlea.innerText = "Kỹ năng sáng tạo nội dung số"
    }else if(i == 4){
        a4.style.color = '#ffffff';
        a2.style.color = '#afafaf';
        a3.style.color = '#afafaf';
        a1.style.color = '#afafaf';
        a5.style.color = '#afafaf';
        titlea.innerText = "Kỹ năng an toàn kĩ thuật số"
        contenta.innerText = "You will be tested on the set of skills needed to protect devices, content, personal data and privacy, while understanding risks and threats of digital environments. This also includes skills necessary to protect physical and psychological health, and to be aware of digital technologies for social well-being and inclusion. The awareness of the environmental impact of using digital technologies is part of this competence area as well."
    }else{
        a5.style.color = '#ffffff';
        a2.style.color = '#afafaf';
        a3.style.color = '#afafaf';
        a4.style.color = '#afafaf';
        a1.style.color = '#afafaf';
        contenta.innerText = "You will be tested on the set of skills to identify needs and technical problems, and to select appropriate technological responses to solve them. This also includes skills necessary to use digital tools to innovate processes and products. The abilities to understand which digital competences need to be improved and to keep up-to-date with the digital progress are part of this competence area as well."
        titlea.innerText = "Kỹ năng giải quyết vấn đề "
    }
})


left.addEventListener('click', () => {
    
    if(i>1){
        i--;
    } 
    else{
        i = 5;
    }

    if(i == 1){
        a1.style.color = '#ffffff';
        a2.style.color = '#afafaf';
        a3.style.color = '#afafaf';
        a4.style.color = '#afafaf';
        a5.style.color = '#afafaf';
        contenta.innerText = "Bạn sẽ được đánh giá dựa trên 1 tập các câu hỏi về những kỹ năng cần thiết như tìm kiếm, truy cập, điều khiển các nội dung số (tập tin, thư mục, website, thông tin trên internet,…..) ở các dạng khác nhau. Đồng thời có thể so sánh các nguồn tài nguyên thông tin khác nhau và hiểu được thông tin nào là đúng, có ích. Khả năng lưu trữ, quản lý, tổ chức tốt cấu trúc thư mục và nhiều loại tập tin khác nhau cũng là 1 phần năng lực trong kỹ năng số."
        titlea.innerText = "Kỹ năng xử lý thông tin và dữ liệu "

    }else if(i == 2){
        a2.style.color = '#ffffff';
        a1.style.color = '#afafaf';
        a3.style.color = '#afafaf';
        a4.style.color = '#afafaf';
        a5.style.color = '#afafaf';
        contenta.innerText = "You will be tested on the set of skills needed to use digital technologies to interact, communicate and collaborate with other people. This also includes being able to participate in society through use of public and private digital services. The ability to manage one’s identity and reputation on the web is part of this competence area as well."
        titlea.innerText = "Kỹ năng giao tiếp và hợp tác"
    }else if(i == 3){
        a3.style.color = '#ffffff';
        a2.style.color = '#afafaf';
        a1.style.color = '#afafaf';
        a4.style.color = '#afafaf';
        a5.style.color = '#afafaf';
        contenta.innerText = "You will be tested on the set of skills needed to create and edit various types of digital content, including text and multimedia files. This includes skills necessary to improve and integrate different kinds of information and content together. The abilities to understand how copyright and licences work and how to develop instructions for a computing system are part of this competence area as well."
        titlea.innerText = "Kỹ năng sáng tạo nội dung số"
    }else if(i == 4){
        a4.style.color = '#ffffff';
        a2.style.color = '#afafaf';
        a3.style.color = '#afafaf';
        a1.style.color = '#afafaf';
        a5.style.color = '#afafaf';
        titlea.innerText = "Kỹ năng an toàn kĩ thuật số"
        contenta.innerText = "You will be tested on the set of skills needed to protect devices, content, personal data and privacy, while understanding risks and threats of digital environments. This also includes skills necessary to protect physical and psychological health, and to be aware of digital technologies for social well-being and inclusion. The awareness of the environmental impact of using digital technologies is part of this competence area as well."
    }else{
        a5.style.color = '#ffffff';
        a2.style.color = '#afafaf';
        a3.style.color = '#afafaf';
        a4.style.color = '#afafaf';
        a1.style.color = '#afafaf';
        contenta.innerText = "You will be tested on the set of skills to identify needs and technical problems, and to select appropriate technological responses to solve them. This also includes skills necessary to use digital tools to innovate processes and products. The abilities to understand which digital competences need to be improved and to keep up-to-date with the digital progress are part of this competence area as well."
        titlea.innerText = "Kỹ năng giải quyết vấn đề "
    }
})


a1.addEventListener('click', () => {

    i = 1
    a1.style.color = '#ffffff';
    a2.style.color = '#afafaf';
    a3.style.color = '#afafaf';
    a4.style.color = '#afafaf';
    a5.style.color = '#afafaf';
    contenta.innerText = "Bạn sẽ được đánh giá dựa trên 1 tập các câu hỏi về những kỹ năng cần thiết như tìm kiếm, truy cập, điều khiển các nội dung số (tập tin, thư mục, website, thông tin trên internet,…..) ở các dạng khác nhau. Đồng thời có thể so sánh các nguồn tài nguyên thông tin khác nhau và hiểu được thông tin nào là đúng, có ích. Khả năng lưu trữ, quản lý, tổ chức tốt cấu trúc thư mục và nhiều loại tập tin khác nhau cũng là 1 phần năng lực trong kỹ năng số."
    titlea.innerText = "Kỹ năng xử lý thông tin và dữ liệu "
})

a2.addEventListener('click', () => {

    i = 2
    a2.style.color = '#ffffff';
    a1.style.color = '#afafaf';
    a3.style.color = '#afafaf';
    a4.style.color = '#afafaf';
    a5.style.color = '#afafaf';
    contenta.innerText = "You will be tested on the set of skills needed to use digital technologies to interact, communicate and collaborate with other people. This also includes being able to participate in society through use of public and private digital services. The ability to manage one’s identity and reputation on the web is part of this competence area as well."
    titlea.innerText = "Kỹ năng giao tiếp và hợp tác"
})

a3.addEventListener('click', () => {

    i = 3
    a3.style.color = '#ffffff';
    a2.style.color = '#afafaf';
    a1.style.color = '#afafaf';
    a4.style.color = '#afafaf';
    a5.style.color = '#afafaf';
    contenta.innerText = "You will be tested on the set of skills needed to create and edit various types of digital content, including text and multimedia files. This includes skills necessary to improve and integrate different kinds of information and content together. The abilities to understand how copyright and licences work and how to develop instructions for a computing system are part of this competence area as well."
    titlea.innerText = "Kỹ năng sáng tạo nội dung số"
})

a4.addEventListener('click', () => {

    i = 4
    a4.style.color = '#ffffff';
    a2.style.color = '#afafaf';
    a3.style.color = '#afafaf';
    a1.style.color = '#afafaf';
    a5.style.color = '#afafaf';
    titlea.innerText = "Kỹ năng an toàn kĩ thuật số"
    contenta.innerText = "You will be tested on the set of skills needed to protect devices, content, personal data and privacy, while understanding risks and threats of digital environments. This also includes skills necessary to protect physical and psychological health, and to be aware of digital technologies for social well-being and inclusion. The awareness of the environmental impact of using digital technologies is part of this competence area as well."

})

a5.addEventListener('click', () => {

    i = 5
    a5.style.color = '#ffffff';
    a2.style.color = '#afafaf';
    a3.style.color = '#afafaf';
    a4.style.color = '#afafaf';
    a1.style.color = '#afafaf';
    contenta.innerText = "You will be tested on the set of skills to identify needs and technical problems, and to select appropriate technological responses to solve them. This also includes skills necessary to use digital tools to innovate processes and products. The abilities to understand which digital competences need to be improved and to keep up-to-date with the digital progress are part of this competence area as well."
    titlea.innerText = "Kỹ năng giải quyết vấn đề"
})

