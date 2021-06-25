var c=["Binh Duong Province","Dong Nai Province","Ho Chi Minh City","Long An Province"],c1=["Thành phố Thủ Dầu Một","Huyện Bàu Bàng","Huyện Dầu Tiếng","Thị xã Bến Cát","Huyện Phú Giáo","Thị xã Tân Uyên","Thành phố Dĩ An","Thành phố Thuận An","Huyện Bắc Tân Uyên"],c2=["Thành phố Biên Hòa","Thành phố Long Khánh","Huyện Tân Phú","Huyện Vĩnh Cửu","Huyện Định Quán","Huyện Trảng Bom","Huyện Thống Nhất","Huyện Cẩm Mỹ","Huyện Long Thành","Huyện Xuân Lộc","Huyện Nhơn Trạch"],c3=["Quận 1","Quận 3","Quận 4","Quận 5","Quận 6","Quận 7","Quận 8","Quận 10","Quận 11","Quận 12","Quận Gò Vấp","Quận Tân Bình","Quận Tân Phú","Quận Bình Thạnh","Quận Phú Nhuận","Quận Bình Tân","Huyện Bình Chánh","Huyện Củ Chi","Huyện Hóc Môn","Huyện Nhà Bè","Huyện Cần Giờ","TP Thủ Đức(Quận 2, Quận 9)"],c4=["Thành phố Tân An","Thị xã Kiến Tường","Huyện Tân Hưng","Huyện Vĩnh Hưng","Huyện Mộc Hóa","Huyện Tân Thạnh","Huyện Thạnh Hóa","Huyện Đức Huệ","Huyện Đức Hòa","Huyện Bến Lức","Huyện Thủ Thừa","Huyện Tân Trụ","Huyện Cần Đước","Huyện Cần Giuộc","Huyện Châu Thành"],

b1=["Phường Hiệp Thành","Phường Phú Lợi","Phường Phú Cường","Phường Phú Hòa","Phường Phú Thọ","Phường Chánh Nghĩa","Phường Định Hòa","Phường Hòa Phú","Phường Phú Mỹ","Phường Phú Tân","Phường Tân An","Phường Hiệp An","Phường Tương Bình Hiệp","Phường Chánh Mỹ"],b2=["Xã Trừ Văn Thố","Xã Cây Trường II","Thị trấn Lai Uyên","Xã Tân Hưng","Xã Long Nguyên","Xã Hưng Hòa","Xã Lai Hưng"], b3=["Thị trấn Dầu Tiếng","Xã Minh Hòa","Xã Minh Thạnh","Xã Minh Tân","Xã Định An","Xã Long Hòa","Xã Định Thành","Xã Định Hiệp","Xã An Lập","Xã Long Tân","Xã Thanh An","Xã Thanh Tuyền"], b4=["Phường Mỹ Phước","Phường Chánh Phú Hòa","Xã An Điền","Xã An Tây","Phường Thới Hòa","Phường Hòa Lợi","Phường Tân Định","Xã Phú An"], b5=["Thị trấn Phước Vĩnh","Xã An Linh","Xã Phước Sang","Xã An Thái","Xã An Long","Xã An Bình","Xã Tân Hiệp","Xã Tam Lập","Xã Tân Long","Xã Vĩnh Hòa","Xã Phước Hòa"], b6=["Phường Uyên Hưng","Phường Tân Phước Khánh","Xã Vĩnh Tân","Xã Hội Nghĩa","Phường Tân Hiệp","Phường Khánh Bình","Xã Phú Chánh","Xã Bạch Đằng","Xã Tân Vĩnh Hiệp","Phường Thạnh Phước","Xã Thạnh Hội","Phường Thái Hòa"], b7=["Phường Dĩ An","Phường Tân Bình","Phường Tân Đông Hiệp","Phường Bình An","Phường Bình Thắng","Phường Đông Hòa","Phường An Bình"], b8=["Phường An Thạnh","Phường Lái Thiêu","Phường Bình Chuẩn","Phường Thuận Giao","Phường An Phú","Phường Hưng Định","Xã An Sơn","Phường Bình Nhâm","Phường Bình Hòa","Phường Vĩnh Phú"], b9=["Xã Tân Định","Xã Bình Mỹ","Xã Tân Bình","Xã Tân Lập","Thị trấn Tân Thành","Xã Đất Cuốc","Xã Hiếu Liêm","Xã Lạ An","Xã Tân Mỹ","Xã Thường Tân"],

d1=["Phường Trảng Dài","Phường Tân Phong","Phường Tân Biên","Phường Hố Nai","Phường Tân Hòa","Phường Tân Hiệp","Phường Bửu Long","Phường Tân Tiến","Phường Tam Hiệp","Phường Long Bình","Phường Quang Vinh","Phường Tân Mai","Phường Thống Nhất","Phường Trung Dũng","Phường Tam Hòa","Phường Hòa Bình","Phường Quyết Thắng","Phường Thanh Bình","Phường Bình Đa","Phường An Bình","Phường Bửu Hòa","Phường Long Bình Tân","Phường Tân Vạn","Phường Tân Hạnh","Phường Hiệp Hòa","Phường Hóa An","Phường An Hòa","Phường Tam Phước","Phường Phước Tân","Xã Long Hưng"], d2=["Phường Xuân Trung","Phường Xuân Thanh","Phường Xuân Bình","Phường Xuân An","Phường Xuân Hoà","Phường Phú Bình","Xã Bình Lộc","Xã Bảo Quang","Phường Suối Tre","Phường Bảo Vinh","Phường Xuân Lập","Phường Bàu Sen","Xã Bàu Trâm","Phường Xuân Tân","Xã Hàng Gòn"], d3=["Thị trấn Tân Phú","Xã Dak Lua","Xã Nam Cát Tiên","Xã Phú An","Xã Núi Tượng","Xã Tà Lài","Xã Phú Lập","Xã Phú Sơn","Xã Phú Thịnh","Xã Thanh Sơn","Xã Phú Trung","Xã Phú Xuân","Xã Phú Lộc","Xã Phú Lâm","Xã Phú Bình","Xã Phú Thanh","Xã Trà Cổ","Xã Phú Điền"], d4=["Thị trấn Vĩnh An","Xã Phú Lý","Xã Trị An","Xã Tân An","Xã Vĩnh Tân","Xã Bình Lợi","Xã Thạnh Phú","Xã Thiện Tân","Xã Tân Bình","Xã Bình Hòa","Xã Mã Đà","Xã Hiếu Liêm"], d5=["Thị trấn Định Quán","Xã Thanh Sơn","Xã Phú Tân","Xã Phú Vinh","Xã Phú Lợi","Xã Phú Hòa","Xã Ngọc Định","Xã La Ngà","Xã Gia Canh","Xã Phú Ngọc","Xã Phú Cường","Xã Túc Trưng","Xã Phú Túc","Xã Suối Nho"], d6=["Thị trấn Trảng Bom","Xã Thanh Bình","Xã Cây Gáo","Xã Bàu Hàm","Xã Sông Thao","Xã Sông Trầu","Xã Đông Hoà","Xã Bắc Sơn","Xã Hố Nai 3","Xã Tây Hoà","Xã Bình Minh","Xã Trung Hoà","Xã Đồi 61","Xã Hưng Thịnh","Xã Quảng Tiến","Xã Giang Điền","Xã An Viễn"], d7=["Xã Gia Tân 1","Xã Gia Tân 2","Xã Gia Tân 3","Xã Gia Kiệm","Xã Quang Trung","Xã Bàu Hàm 2","Xã Hưng Lộc","Xã Lộ 25","Xã Xuân Thiện","Thị trấn Dầu Giây"], d8=["Xã Sông Nhạn","Xã Xuân Quế","Xã Nhân Nghĩa","Xã Xuân Đường","Xã Long Giao","Xã Xuân Mỹ","Xã Thừa Đức","Xã Bảo Bình","Xã Xuân Bảo","Xã Xuân Tây","Xã Xuân Đông","Xã Sông Ray","Xã Lâm San"], d9=["Thị trấn Long Thành","Xã An Phước","Xã Bình An","Xã Long Đức","Xã Lộc An","Xã Bình Sơn","Xã Tam An","Xã Cẩm Đường","Xã Long An","Xã Bàu Cạn","Xã Long Phước","Xã Phước Bình","Xã Tân Hiệp","Xã Phước Thái"], d10=["Thị trấn Gia Ray","Xã Xuân Bắc","Xã Suối Cao","Xã Xuân Thành","Xã Xuân Thọ","Xã Xuân Trường","Xã Xuân Hòa","Xã Xuân Hưng","Xã Xuân Tâm","Xã Suối Cát","Xã Xuân Hiệp","Xã Xuân Phú","Xã Xuân Định","Xã Bảo Hoà","Xã Lang Minh"], d11=["Xã Phước Thiền","Xã Long Tân","Xã Đại Phước","Thị trấn Hiệp Phước","Xã Phú Hữu","Xã Phú Hội","Xã Phú Thạnh","Xã Phú Đông","Xã Long Thọ","Xã Vĩnh Thanh","Xã Phước Khánh","Xã Phước An"],

h1=["Phường Tân Định","Phường Đa Kao","Phường Bến Nghé","Phường Bến Thành","Phường Nguyễn Thái Bình","Phường Phạm Ngũ Lão","Phường Cầu Ông Lãnh","Phường Cô Giang","Phường Nguyễn Cư Trinh","Phường Cầu Kho"], h2=["Phường 01","Phường 02","Phường 03","Phường 04","Phường 05","Phường 06","Phường 07","Phường 08","Phường 09","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14","Phường Võ Thị Sáu"], h3=["Phường 01","Phường 02","Phường 03","Phường 04","Phường 05","Phường 06","Phường 07","Phường 08","Phường 09","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14","Phường 15","Phường 16","Phường 17","Phường 18"], h4=["Phường 01","Phường 02","Phường 03","Phường 04","Phường 05","Phường 06","Phường 07","Phường 08","Phường 09","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14","Phường 15"], h5=["Phường 01","Phường 02","Phường 03","Phường 04","Phường 05","Phường 06","Phường 07","Phường 08","Phường 09","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14"], h6=["Phường Tân Thuận Đông","Phường Tân Thuận Tây","Phường Tân Kiểng","Phường Tân Hưng","Phường Bình Thuận","Phường Tân Quy","Phường Phú Thuận","Phường Tân Phú","Phường Tân Phong","Phường Phú Mỹ"], h7=["Phường 01","Phường 02","Phường 03","Phường 04","Phường 05","Phường 06","Phường 07","Phường 08","Phường 09","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14","Phường 15","Phường 16"], h8=["Phường 01","Phường 02","Phường 03","Phường 04","Phường 05","Phường 06","Phường 07","Phường 08","Phường 09","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14","Phường 15"], h9=["Phường 01","Phường 02","Phường 03","Phường 04","Phường 05","Phường 06","Phường 07","Phường 08","Phường 09","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14","Phường 15","Phường 16"], h10=["Phường Thạnh Lộc","Phường Hiệp Thành","Phường Thới An","Phường Tân Chánh Hiệp","Phường An Phú Đông","Phường Tân Thới Hiệp","Phường Trung Mỹ Tây","Phường Tân Hưng Thuận","Phường Đông Hưng Thuận","Phường Tân Thới Nhất"], h11=["Phường 01","Phường 02","Phường 03","Phường 04","Phường 05","Phường 06","Phường 07","Phường 08","Phường 09","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14","Phường 15","Phường 16","Phường 17"], h12=["Phường 01","Phường 02","Phường 03","Phường 04","Phường 05","Phường 06","Phường 07","Phường 08","Phường 09","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14","Phường 15"], h13=["Phường Tây Thạnh","Phường Sơn Kỳ","Phường Tân Quý","Phường Tân Thành","Phường Phú Thọ Hòa","Phường Phú Thạnh","Phường Phú Trung","Phường Hòa Thạnh","Phường Hiệp Tân","Phường Tân Thới Hòa"], h14=["Phường 01","Phường 02","Phường 03","Phường 04","Phường 05","Phường 06","Phường 07","Phường 08","Phường 09","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14","Phường 15","Phường 16","Phường 17","Phường 18","Phường 19","Phường 20","Phường 21","Phường 22","Phường 23","Phường 24","Phường 25","Phường 26","Phường 27","Phường 28"], h15=["Phường 01","Phường 02","Phường 03","Phường 04","Phường 05","Phường 06","Phường 07","Phường 08","Phường 09","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14","Phường 15","Phường 16","Phường 17"], h16=["Phường Bình Hưng Hòa","Phường Bình Hưng Hoà A","Phường Bình Hưng Hoà B","Phường Bình Trị Đông","Phường Bình Trị Đông A","Phường Bình Trị Đông B","Phường Tân Tạo","Phường Tân Tạo A","Phường An Lạc","Phường An Lạc A"], h17=["Thị trấn Tân Túc","Xã Phạm Văn Hai","Xã Vĩnh Lộc A","Xã Vĩnh Lộc B","Xã Bình Lợi","Xã Lê Minh Xuân","Xã Tân Nhựt","Xã Tân Kiên","Xã Bình Hưng","Xã Phong Phú","Xã An Phú Tây","Xã Hưng Long","Xã Đa Phước","Xã Tân Quý Tây","Xã Bình Chánh","Xã Quy Đức"], h18=["Thị trấn Củ Chi","Xã Phú Mỹ Hưng","Xã An Phú","Xã Trung Lập Thượng","Xã An Nhơn Tây","Xã Nhuận Đức","Xã Phạm Văn Cội","Xã Phú Hòa Đông","Xã Trung Lập Hạ","Xã Trung An","Xã Phước Thạnh","Xã Phước Hiệp","Xã Tân An Hội","Xã Phước Vĩnh An","Xã Thái Mỹ","Xã Tân Thạnh Tây","Xã Hòa Phú","Xã Tân Thạnh Đông","Xã Bình Mỹ","Xã Tân Phú Trung","Xã Tân Thông Hội"], h19=["Thị trấn Hóc Môn","Xã Tân Hiệp","Xã Nhị Bình","Xã Đông Thạnh","Xã Tân Thới Nhì","Xã Thới Tam Thôn","Xã Xuân Thới Sơn","Xã Tân Xuân","Xã Xuân Thới Đông","Xã Trung Chánh","Xã Xuân Thới Thượng","Xã Bà Điểm"], h20=["Thị trấn Nhà Bè","Xã Phước Kiển","Xã Phước Lộc","Xã Nhơn Đức","Xã Phú Xuân","Xã Long Thới","Xã Hiệp Phước"], h21=["Thị trấn Cần Thạnh","Xã Bình Khánh","Xã Tam Thôn Hiệp","Xã An Thới Đông","Xã Thạnh An","Xã Long Hòa","Xã Lý Nhơn"], h22=["Phường Linh Xuân","Phường Bình Chiểu","Phường Linh Trung","Phường Tam Bình","Phường Tam Phú","Phường Hiệp Bình Phước","Phường Hiệp Bình Chánh","Phường Linh Chiểu","Phường Linh Tây","Phường Linh Đông","Phường Bình Thọ","Phường Trường Thọ","Phường Long Bình","Phường Long Thạnh Mỹ","Phường Tân Phú","Phường Hiệp Phú","Phường Tăng Nhơn Phú A","Phường Tăng Nhơn Phú B","Phường Phước Long B","Phường Phước Long A","Phường Trường Thạnh","Phường Long Phước","Phường Long Trường","Phường Phước Bình","Phường Phú Hữu","Phường Thảo Điền","Phường An Phú","Phường An Khánh","Phường Bình Trưng Đông","Phường Bình Trưng Tây","Phường Cát Lái","Phường Thạnh Mỹ Lợi","Phường An Lợi Đông","Phường Thủ Thiêm"],

l1=["Phường 5","Phường 2","Phường 4","Phường Tân Khánh","Phường 1","Phường 3","Phường 7","Phường 6","Xã Hướng Thọ Phú","Xã Nhơn Thạnh Trung","Xã Lợi Bình Nhơn","Xã Bình Tâm","Phường Khánh Hậu","Xã An Vĩnh Ngãi"], l2=["Phường 1","Phường 2","Xã Thạnh Trị","Xã Bình Hiệp","Xã Bình Tân","Xã Tuyên Thạnh","Phường 3","Xã Thạnh Hưng"], l3=["Thị trấn Tân Hưng","Xã Hưng Hà","Xã Hưng Điền B","Xã Hưng Điền","Xã Thạnh Hưng","Xã Hưng Thạnh","Xã Vĩnh Thạnh","Xã Vĩnh Châu B","Xã Vĩnh Lợi","Xã Vĩnh Đại","Xã Vĩnh Châu A","Xã Vĩnh Bửu","Thị trấn Vĩnh Hưng","Xã Hưng Điền A","Xã Khánh Hưng","Xã Thái Trị","Xã Vĩnh Trị","Xã Thái Bình Trung","Xã Vĩnh Bình","Xã Vĩnh Thuận","Xã Tuyên Bình","Xã Tuyên Bình Tây"], l4=["Xã Bình Hòa Tây","Xã Bình Thạnh","Xã Bình Hòa Trung","Xã Bình Hòa Đông","Thị trấn Bình Phong Thạnh","Xã Tân Lập","Xã Tân Thành"], l5=["Thị trấn Tân Thạnh","Xã Bắc Hòa","Xã Hậu Thạnh Tây","Xã Nhơn Hòa Lập","Xã Tân Lập","Xã Hậu Thạnh Đông","Xã Nhơn Hoà","Xã Kiến Bình","Xã Tân Thành","Xã Tân Bình","Xã Tân Ninh","Xã Nhơn Ninh","Xã Tân Hòa"], l6=["Thị trấn Thạnh Hóa","Xã Tân Hiệp","Xã Thuận Bình","Xã Thạnh Phước","Xã Thạnh Phú","Xã Thuận Nghĩa Hòa","Xã Thủy Đông","Xã Thủy Tây","Xã Tân Tây","Xã Tân Đông","Xã Thạnh An"], l7=["Thị trấn Đông Thành","Xã Mỹ Quý Đông","Xã Mỹ Thạnh Bắc","Xã Mỹ Quý Tây","Xã Mỹ Thạnh Tây","Xã Mỹ Thạnh Đông","Xã Bình Thành","Xã Bình Hòa Bắc","Xã Bình Hòa Hưng","Xã Bình Hòa Nam","Xã Mỹ Bình"], l8=["Thị trấn Hậu Nghĩa","Thị trấn Hiệp Hòa","Thị trấn Đức Hòa","Xã Lộc Giang","Xã An Ninh Đông","Xã An Ninh Tây","Xã Tân Mỹ","Xã Hiệp Hòa","Xã Đức Lập Thượng","Xã Đức Lập Hạ","Xã Tân Phú","Xã Mỹ Hạnh Bắc","Xã Đức Hòa Thượng","Xã Hòa Khánh Tây","Xã Hòa Khánh Đông","Xã Mỹ Hạnh Nam","Xã Hòa Khánh Nam","Xã Đức Hòa Đông","Xã Đức Hòa Hạ","Xã Hựu Thạn"], l9=["Thị trấn Bến Lức","Xã Thạnh Lợi","Xã Lương Bình","Xã Thạnh Hòa","Xã Lương Hòa","Xã Tân Hòa","Xã Tân Bửu","Xã An Thạnh","Xã Bình Đức","Xã Mỹ Yên","Xã Thanh Phú","Xã Long Hiệp","Xã Thạnh Đức","Xã Phước Lợi","Xã Nhựt Chánh"], l10=["Thị trấn Thủ Thừa","Xã Long Thạnh","Xã Tân Thành","Xã Long Thuận","Xã Mỹ Lạc","Xã Mỹ Thạnh","Xã Bình An","Xã Nhị Thành","Xã Mỹ An","Xã Bình Thạnh","Xã Mỹ Phú","Xã Tân Long"], l11=["Thị trấn Tân Trụ","Xã Tân Bình","Xã Quê Mỹ Thạnh","Xã Lạc Tấn","Xã Bình Trinh Đông","Xã Tân Phước Tây","Xã Bình Lãng","Xã Bình Tịnh","Xã Đức Tân"], l12=["Thị trấn Cần Đước","Xã Long Trạch","Xã Long Khê","Xã Long Định","Xã Phước Vân","Xã Long Hòa","Xã Long Cang","Xã Long Sơn","Xã Tân Trạch","Xã Mỹ Lệ","Xã Tân Lân","Xã Phước Tuy","Xã Long Hựu Đông","Xã Tân Ân","Xã Phước Đông","Xã Long Hựu Tây","Xã Tân Chánh"], l13=["Thị trấn Cần Giuộc","Xã Phước Lý","Xã Long Thượng","Xã Long Hậu","Xã Phước Hậu","Xã Mỹ Lộc","Xã Phước Lại","Xã Phước Lâm","Xã Thuận Thành","Xã Phước Vĩnh Tây","Xã Phước Vĩnh Đông","Xã Long An","Xã Long Phụng","Xã Đông Thạnh","Xã Tân Tập"], l14=["Thị trấn Tầm Vu","Xã Bình Quới","Xã Hòa Phú","Xã Phú Ngãi Trị","Xã Vĩnh Công","Xã Thuận Mỹ","Xã Hiệp Thạnh","Xã Phước Tân Hưng","Xã Thanh Phú Long","Xã Dương Xuân Hội","Xã An Lục Long","Xã Long Trì","Xã Thanh Vĩnh Đông"]

,arr=[c1,c2,c3,c4], arrc1=[b1,b2,b3,b4,b5,b6,b7,b8,b9], arrc2=[d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11], arrc3=[h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,h18,h19,h20,h21,h22], arrc4=[l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14];