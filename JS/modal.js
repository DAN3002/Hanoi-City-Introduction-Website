var text = 
[
	"Công trình được người Pháp khởi công xây dựng năm 1901 và hoàn thành năm 1911. Đây là một trong những địa điểm thăm quan nổi tiếng tại thủ đô. Tôi thích nhất là ngồi ở hiên nhà hát lớn vào buổi đêm, nghe nhạc và ăn kem Tràng Tiền, ngắm dòng người qua lại",
	"Tên chính thức: Nhà thờ chính tòa Thánh Giuse. Nhà thờ được hoàn thành vào năm 1886 - là nhà thờ chính tòa của Tổng giáo phận Hà Nội, nơi có ngai tòa của Tổng giám mục. Đây cũng là một nhà thờ lâu đời ở Hà Nội, thường xuyên diễn ra các sinh hoạt tín ngưỡng của các giáo dân thuộc tổng giáo phận Hà Nội.",
	"Còn gọi là Kỳ đài Hà Nội - là một kết cấu dạng tháp được xây dựng cùng thời với thành Hà Nội, dưới triều nhà Nguyễn (bắt đầu năm 1805, hoàn thành năm 1812). Kiến trúc cột cờ bao gồm ba tầng đế và một thân cột, được coi là một trong những biểu tượng của thành phố. Công trình nằm trên mặt đường Điện Biên Phủ - đối diện công viên Lenin và cùng trong khuôn viên Bảo tàng Lịch sử Quân sự Việt Nam.",
	"Được xây dựng và hoàn thành năm 2008 nhân dịp kỷ niệm 1000 năm Thăng Long - Hà Nội. Nơi đây được tổ chức Guinness thế giới công nhận đây là bức tranh gốm dài nhất thế giới.",
	"Là cây cầu thép đầu tiên bắc qua sông Hồng, nối quận Hoàn Kiếm với quận Long Biên, do Pháp xây dựng (1898-1902). Buổi tối, lên đây ngắm trăng sao, hóng gió thì tuyệt vời. Những ngày trời se lạnh, ăn ngô nướng, mực nướng trên cầu thì khỏi chê.",
	"Còn gọi là Hồ Gươm, nơi đây là trái tim của Hà Nội. Đây không chỉ là nơi để mọi người thả hồn đi dạo, hóng mát mà còn gắn liền với người dân thủ đô về nhiều phương diện lịch sử văn hóa cũng như đi vào trong thơ ca."
];

var title =
[
	"Nhà hát Lớn Hà Nội",
	"Nhà thờ Lớn",
	"Cột cờ Hà Nội",
	"Con đường gốm sứ",
	"Cầu Long Biên",
	"Hồ Hoàn Kiếm"
];

var image =
[
	"https://upload.wikimedia.org/wikipedia/commons/2/24/Hanoi_Opera_House_1.jpg",
	"https://timeoutvietnam.com/files/2016/01/04/nha-tho-lon-ha-noi-hon-au-giua-pho-viet-1.jpg",
	"https://images.foody.vn/res/g12/113127/prof/s576x330/foody-mobile-cc4-jpg-140-635563289112964220.jpg",
	"https://image.anninhthudo.vn/w700/uploaded/123/2017_09_21/gom2.jpg",
	"https://znews-photo.zadn.vn/w660/Uploaded/ywfau/2014_02_27/cauLB2.jpg",
	"http://www.vietfuntravel.com.vn/image/data/Ha-Noi/ho-hoan-kiem/Gioi-thieu-doi-net-ve-Ho-Hoan-Kiem-Ho-Guom-o-Ha-Noi-2.jpg"
];

var video =
[
	"https://www.youtube.com/embed/fF92dhOVK-k",
	"https://www.youtube.com/embed/CYAsMuZDwUo",
	"https://www.youtube.com/embed/SMlYrOHeB-Y",
	"https://www.youtube.com/embed/r6GfWAU4Lis",
	"https://www.youtube.com/embed/C3cCJfhm31s",
	"https://www.youtube.com/embed/WR2ApqIYtfc"
]
$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip()
});

function setData(index) {
	$("#modal-text").text(text[index]);
	$("#modal-title").text(title[index]);
	$("#modal-image").attr({
		"src": image[index]
	});
	$("#modal-video").attr({
		"src": video[index]
	});	
}