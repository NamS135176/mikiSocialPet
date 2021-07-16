export const dogs = [
    {
        type: "Chó Pug",
	image : "https://zoipet.com/wp-content/uploads/2020/03/cho-pug-mat-xe.jpg",
        char: `Chú chó Pug có chiều cao từ 25 - 35 cm và có cân nặng khoảng 6 - 10kg. 
        Sở hữu chiều cao lùn và thân hình to mập nên chó Pug có thân hình vuông. Lưng Pug thẳng, không lõm cũng không căng nên chúng có dáng đi khá oai vệ và vững chắc. Chó Pug có làn da khá mềm và mỗi khi vuốt ve chúng sẽ cảm thấy vô cùng dễ chịu.
        - Những chú chó Pug thuần chủng sẽ có đầu hình vòng cung khi nhìn ngang. Đặc biệt, chúng hầu như không có xương mũi, vì vậy chúng thường gặp khó khăn khi hít thở. Còn khi nhìn chính diện thì chó Pug có khuôn mặt to tròn với nhiều nếp nhăn xếp chồng lên nhau. Nếu những con chó Pug nào càng nhiều nếp nhăn càng được yêu thích. 
        - Chó Pug sở hữu những đôi mắt to tròn và lồi, những chú chó Pug thuần chủng mắt sẽ có màu sẫm. Tai chúng luôn luôn cụp và to. Khuôn miệng chúng khá rộng, phần xương hàm to và chắc khỏe. Riêng hàm dưới sẽ hơi nhô so với hàm trên. ...
        - Trái với khuôn mặt dữ dằn và nghiêm túc, tính cách chó Pug lại rất hiền lành và hòa đồng. Hơn nữa, chúng cực kỳ thông minh, lanh lợi, trung thành và rất thân thiện với con người và những chú chó khác.`,
        tame: `Chăm sóc sức khỏe
        - Không gian chỗ ở thoáng mát, sạch sẽ và không bị ẩm ướt
        - Chó Pug ham ăn nên rất dễ béo phì, bạn không nên cho chó ăn quá nhiều axit béo. Hơn nữa, chúng lại rất lười nên bạn cần thường xuyên dẫn chúng ra ngoài vận động và vận động, mỗi ngày nên cho chúng chạy nhảy khoảng 15 - 30 phút để có một sức khỏe tốt.
        - Trên mặt chúng có rất nhiều nếp nhăn nên bạn phải thường xuyên vệ sinh sạch sẽ để tránh các bệnh nhiễm trùng cho da
        - Chó Pug hay bị bệnh răng miệng nên bạn hãy đánh răng cho chúng khoảng 3 lần/tuần.
        `,
        nutri: `* 1 - 2 tháng tuổi: Nên cho chó Pug ăn các loại thức ăn băm 
        nhuyễn và bổ sung thức ăn khô bán trên thị trường. Nên cho chó Pug ăn nhiều một chút, khoảng 4 - 5 bữa/ngày.
        * 2 - 6 tháng tuổi: Giai đoạn này nên bổ sung cho chó Pug ăn những loại thức ăn giàu calo, protein,... và cho chó Pug tập ăn dần thịt, cá, tôm, rau củ với tần suất ăn là 3 - 4 bữa/ngày
        * 6 tháng trở đi: Từ giai đoạn này nên rút bớt lại khẩu phần ăn của Pug và tăng cường dinh dưỡng trong khẩu phần ăn như các thực phẩm giàu protein, chất xơ và đạm cùng các loại rau xanh. Như vậy chó Pug sẽ tăng trưởng khỏe mạnh và phát triển thể lực.`,
        sick: [
            {
                name: "Bệnh về mặt và mũi",
                sym: ' Khó thở là một bệnh thường gặp ở chó Pug do chúng có cấu tạo hộp sọ khá lạ. Giống chó này dễ bị khó thở khi thời tiết nóng hoặc chạy nhảy nhiều. Tình trạng này thường không gây nguy hiểm nhưng khi thấy miệng và mũi chó sủi bọt thì bạn nên đem chúng đến cơ sở thú y sớm nhất để tránh hậu quả nghiêm trọng.',
                treat: `Để hạn chế tình trạng khó thở ở chó Pug, bạn nên để chúng sống ở một không gian khô ráo, thoáng mát; tránh chạy nhảy, đùa nghịch quá sức. Vào mùa hè chỉ nên cho chó Pug ra ngoài lúc sáng sớm hoặc chiều tối khi đã hết nắng. 
            Ngoài ra, mặt của chó Pug có nhiều nếp nhăn nên nếu không được vệ sinh sạch sẽ thì rất dễ gây ra những vấn đề về da qua những nếp nhăn đó.Bởi thế nên bạn phải thường xuyên vệ sinh sâu bên trong những nếp nhăn sau khi chó nô đùa ngoài trời.`
            },
            {
                name: "Bệnh về mắt",
                sym: `Pug rất dễ bị khô mắt. Nguyên nhân gây ra khô mắt là do bệnh viêm kết giác mạc. Bệnh này có khả năng khiến chú chó bị mù lòa. 
            Bên cạnh đó, Pug còn có khả năng mắc bệnh đục thủy tinh thể.Căn bệnh này sẽ gây hại nhiều cho thị giác của chó và chỉ có thể chữa trị bằng phương pháp mổ.Nếu một ngày nào đó bạn cảm thấy mắt Pug có 1 đám mờ mờ màu xanh thì đó chính là đục thủy tinh thể.`,
                treat: `Pug có 1 đôi mắt to tròn và lồi nên rất dễ bị những vật sắc nhọn va chạm làm tổn thương mắt dẫn đến loét. Khi Pug xuất hiện những triệu chứng của những bệnh trên hãy mang đến bác sĩ thú y để có giải pháp chữa trị tránh những di chứng về sau.`
            }
        ]
    },
    {
        type: "Chó Poodle",
	image : "http://file.hstatic.net/1000238938/file/cho-poodle-con_e33b8d0750334627b384da2e5231074e_grande.png",
        char: `Những chú chó Poodle luôn khiến người khác đổ gục bởi vẻ ngoài xinh xắn và đáng yêu của mình. Nổi bật hơn hết là bộ lông xoăn đặc trưng với các màu như nâu đỏ, trắng, đen, vàng mơ, kem, xám, trắng, socola. 
        Về tính cách thì hầu hết nhà Poodle đều là những chú chó thân thiện, nghịch ngợm và thông minh. Đặc biệt, chúng học rất nhanh và khả năng học hỏi của chúng rất tốt.
        
        * Tuổi thọ
        Chó Poodle là giống chó săn vịt cực đáng yêu, loài Poodle hiện phổ biến với 3 loại là Top Poodle, Mini Poodle và Standard Poodle và đều có tuổi thọ từ 12 - 15 năm. Còn hai kích thước không được công nhận là Tiny và Teacup thì có tuổi thọ khá ngắn, từ 5 - 8 năm. `,
        tame: `Chăm sóc sức khỏe cho chó Poodle
        1. Chó Poodle không chịu được khí hậu quá nóng hay quá lạnh. Vì vậy một nơi ở sạch sẽ, rộng rãi và thoáng mát là điều kiện tốt về nơi ở cho chúng. Vào mùa đông bạn nên hạn chế dắt Poodle đi dạo vì thời tiết mùa đông ở ngoài khá lạnh, chúng có bộ lông dày và xù nhưng khả năng giữ ấm cơ thể lại rất kém. 
        2. Chó Poodle là loài chó thích vận động, chạy nhảy nên mỗi ngày bạn nên dắt chúng đi dạo và cho chúng giao tiếp với những chú chó khác.
        3. Poodle dễ bị cảm lạnh nên bạn dùng nước ấm để tắm cho chúng
        4. Sở hữu bộ lông dày nên phải tắm cho Poodle thường xuyên, khoảng 2 -3 lần một tuần.
        5. Poodle mọc lông rất nhanh nên cứ 1 tháng bạn tỉa lông cho Poodle 1 lần`,
        nutri: `Chế độ dinh dưỡng của Poodle thay đổi theo từng độ tuổi của chúng. Bạn có thể học nấu thức ăn cho chó cảnh Poodle hoặc mua thức ăn ở những địa chỉ uy tín, tin cậy.
        1. Từ 1 - 2 tháng tuổi: Ở độ tuổi này bạn nên cho chúng ăn các loại thức ăn mềm như cháo xay nhuyễn, sữa ấm và nhớ chia nhỏ thành 4 - 5 bữa ăn
        2. Từ 3 - 6 tháng tuổi: Poodle giai đoạn này đã cứng cáp hơn rồi nên bạn có thể cho chúng ăn cháo gà, cháo bò,... và uống nhiều sữa.
        3. Từ 7 tháng tuổi trở lên: Bổ sung nhiều thức ăn nhiều canxi, đạm, protein và rau củ. Bạn nên cho Poodle ăn 2 - 3 bữa 1 ngày, thực đơn nên thay đổi để Poodle không thấy nhàm chán.
        Lưu ý:
        • Chó Poodle rất hay bị cảm lạnh và mắc các bệnh về đường hô hấp, chó Poodle cũng hay gặp các vấn đề như bệnh về lông, bệnh xương khớp, đường ruột và các bệnh ngoài ra,... Một bộ lông dày rậm sẽ là nguyên nhân gây ra bệnh nấm, gàu trắng. Vì vậy hãy chăm sóc Poodle thật sạch sẽ và cẩn thận, luôn đảm bảo cho chúng một cơ thể khỏe mạnh. 
        • Khi phát hiện ra chú chó Poodle gặp các vấn đề về đường hô hấp bạn nên cho chúng uống thuốc phế quản hoặc nước gừng để giữ ấm cơ thể chúng.
        • Cần đưa chúng đến bác sĩ thú y để tẩy giun định kỳ và tiêm vắc-xin ngừa bệnh. 
        `,
        sick: [
            {
                name: "Bệnh ho cũi ở chó Poodle",
                sym: `Bệnh ho cũi chính là 1 loại bệnh thường gặp ở chó Poodle và rất phổ biến ở các loại chó. Đây là căn bệnh không nguy hiểm nhưng nếu không có biện pháp cứu chữa kịp thời thì tính mạng của chó Poodle sẽ không được đảm bảo. 
                Bệnh ho cũi thường xuất hiện ở chó Poodle dưới 6 tháng tuổi khi thời tiết thay đổi đột ngột. Biểu hiện thường thấy của căn bệnh này là: mắt ửng đỏ, chảy nước mũi, tiếng ho to và kéo dài, ho khan kéo dài,... Những biểu hiện này có thể kéo dài khoảng thời gian dài và dần nặng hơn nếu không có phương pháp chữa. Ở những trường hợp nặng hơn thì những triệu chứng diễn biến rất phức tạp như: khó thở, ho nặng nề hơn, sốt và bỏ ăn,... `,
                treat: `Để điều trị bệnh ho cũi thì bạn cần đưa chó Poodle đến gặp bác sĩ thú y để nhận được hướng dẫn chữa bệnh. Bên cạnh, bạn có thể sử dụng thuốc kháng sinh để giảm cơn ho.`
            },
            {
                name: "Bệnh viêm da ở chó Poodle",
                sym: `Viêm da cũng là một bệnh thường gặp ở chó Poodle. Lý do là bởi Poodle có bộ lông mọc dày và rậm rạp; đây chính là nơi trú ẩn lý tưởng của những loại ký sinh trùng như rận, ve chó, bọ chét. Những loại ký sinh trùng này sẽ gây nên tình trạng lở loét, từ đó gây nên bệnh ghẻ và nấm trên da. Đôi khi, chó Poodle cũng có thể bị viêm da do cắt tỉa lông không đúng cách. Bệnh viêm da ở chó Poodle nếu không chữa trị kịp thời sẽ dẫn đến hoại tử, nhiễm trùng trên da. 
                Khi Poodle bị viêm da, bạn có thể nhận thấy các dấu hiệu như chó liên tục gặm nhấm, cào cấu, bứt lông do ngứa ngáy, khó chịu. Vùng da ở khu vực này sẽ có dấu hiệu chảy mủ, vón thành cục bông nằm trên lông và đóng vảy. `,
                treat: `Để điều trị căn bệnh thường gặp ở chó Poodle này bạn cần:
                • Bạn lấy tay gỡ bỏ các ký sinh trùng bám trên da để chúng không hút máu của Poodle. Bạn nên lưu ý bắt nhẹ tay, tránh giật lông mạnh làm ảnh hưởng đến làn da của chó.
                • Sau đó, bạn mang cún đến bác sỹ thú y để cắt bỏ phần lông tại nơi bị viêm để da được thông thoáng. Sau đó dùng oxy già hoặc nước muối pha loãng để lau chùi sạch sẽ lớp da cho chó.
                • Poodle sẽ được tiêm 1 mũi Bivermectin 0,1% với liều lượng tương xứng cùng trọng lượng cơ thể của mỗi cá thể Poodle
                • Bạn mang chó về nhà chăm sóc và theo dõi thêm, vệ sinh vùng da bị viêm theo hướng dẫn của bác sĩ thú y `
            }
        ]
    },
    {
        type: "Chó Beagle",
	image : "https://azpet.com.vn/wp-content/uploads/2019/07/cho-beagle-21.png",
        char: `Sở hữu một ngoại hình đáng yêu và thu hút nên chó Beagle được rất nhiều người yêu thích và muốn sở hữu chúng để là thú cưng. Chúng có chiều cao khoảng 33 - 41cm ở độ tuổi trưởng thành và cân nặng từ 10 - 11kg với chó đực, 9 - 10kg với chó cái.  Chúng có thân hình vuông vắn, cứng cáp và nổi bật với bộ lông tam thể mượt mà cùng đôi tai cụp đặc trưng.
        Chó Beagle là loài chó vui nhộn và năng động, trông chúng lúc nào cũng tràn đầy năng lực và có vẻ như chúng rất thích các hoạt động ngoài trời.Nhưng tuy nhiên chúng có bản tính săn mồi, có thể làm hại những vật nuôi khác như mèo, thỏ, hamster, ...
        • Tuổi thọ
        Những chú chó Beagle sôi động, dễ gần và thân thiện với con người có tuổi thọ dao động từ 12 - 15 năm.`,
        tame: `Chăm sóc sức khỏe
        - Chó Beagle là chú chó hiếu động và tràn đầy năng lượng nên chúng rất hay đi lang thang.Vì vậy bạn nên cẩn thận khi chú ta ra khỏi nhà và chó chúng dạo chơi, tốt nhất là nên xích chúng lại để kiểm soát dễ hơn.
        - Vì sở hữu bộ lông ngắn nên chỉ thỉnh thoảng tắm cho chúng mà thôi.Khi tắm nên sử dụng nước ấm vừa, hãy loại bỏ toàn bộ lông rụng của chúng, sau đó làm sạch các nếp nhăn trên khuôn mặt.
        - Đến bác sĩ thú ý và tiêm phòng định kỳ`,
        nutri: `Trong khoản ăn uống thì chó Beagle lại cực kỳ dễ tính, chúng không quá kén ăn và có thể ăn mọi thứ. Bạn có thể cho chúng ăn các món ăn đóng gói, đóng hộp sẵn hoặc tự nấu cho chúng.`,
        sick: [
            {
                name: "Bệnh động kinh",
                sym: `Đây là căn bệnh di truyền có thể gặp phải ở cho Beagle. Các dấu hiệu thường gặp ở bệnh này sẽ là cún trở nên phá phách, khó bảo, miệng hay mở ra,… Thậm chí cún còn lên cơn co giật khi tình trạng bệnh trở nặng. Việc phát hiện kịp thời cún Beagle nhà bạn có bị động kinh hay không là rất quan trọng. `,
                treat: `Mặc dù khả năng chữa khỏi hoàn toàn là tương đối thấp nhưng việc phát hiện bệnh kịp thời sẽ hạn chế những nguy hiểm cho chủ nuôi và những người xung quanh.`
            },
            {
                name: "Bệnh còi xương suy dinh dưỡng",
                sym: `Nguyên nhân dẫn đến bệnh còi xương suy dinh dưỡng ở chó Beagle là do hàm lượng canxi, vitamin D và phốt pho trong thức ăn bị thiếu hụt. Tỷ lệ giữa canxi và phốt pho không cân đối cũng là nguyên nhân làm cún bị còi xương. Bên cạnh đó, những căn bệnh về đường ruột có thể là một trong những tác nhân dẫn đến các cún Beagle không hấp thụ tốt các chất dinh dưỡng. 
                Bệnh còi xương ở Beagle hay các giống chó khác thường tiến triển theo 3 giai đoạn như sau:
                • Giai đoạn 1: Cún chán ăn, hệ tiêu hóa rối loạn nhẹ, cún thường không thích nằm một chỗ.Các khớp xương của cún bắt đầu có dấu hiệu đau nhức.
                • Giai đoạn 2: Cún thường xuyên bỏ dở thức ăn, hay liếm bậy bạ, ít thay răng hơn trước.Một số cún còn có thể xuất hiện những cơn co giật ngắn.
                • Giai đoạn 3: Khung xương của cún bắt đầu có sự biến dạng, những khớp xương dần sưng to.Trong khi đó xương ống chân lại dần cong queo, xương cột sống bị cong vẹo,..Từ đó dẫn đến nhiều bệnh tật nguy hiểm khác.`,
                treat: `Để phòng tránh bệnh còi xương suy dinh dưỡng ở chó Beagle, bạn cần chú ý đến chế độ dinh dưỡng của cún. Trong đó, bạn cần cân đối giữa lượng canxi, phốt pho, vitamin D. Bên cạnh mỗi ngày, bạn nên cho cún đi phơi nắng vào buổi sáng sớm. Đây là cách tốt nhất để bộ xương của cún thêm chắc khỏe nhờ vào lượng vitamin D từ ánh nắng Mặt Trời.`
            },
            {
                name: "Hội chứng Chinese Beagle",
                sym: `Hội chứng Chinese Beagle làm cho các chú cún Beagle sẽ có phần đầu to hơn bình thường, không cân đối với cơ thể. Mắt cún bắt đầu bọ xéo, cún dễ mắc các bệnh liên quan đến tim mạch hơn. `,
                treat: ``
            },
            {
                name: "Bệnh cườm nước",
                sym: `Bệnh cườm nước ở chó Beagle khiến cho thị lực của cún dần bị suy giảm. Cún đi lại khó khăn hơn do không còn nhìn rõ đường, khi tình trạng bệnh trở nặng cún có thể bị mù hoàn toàn. `,
                treat: ``
            },
            {
                name: "Bệnh trật xương bánh chè",
                sym: `Giống chó Beagle rất thích chạy nhảy, khám phá mọi lúc mọi nơi. Tính tinh nghịch dễ khiến cho cún gặp phải những tai nạn ảnh hưởng đến khớp xương. Trong đó, Beagle nói chung rất dễ bị trật xương bánh chè khi hoạt động quá mạnh. `,
                treat: ``
            },
        ]
    },
    {
        type: "Chó Chihuahua",
	image : "https://petmaster.vn/petroom/wp-content/uploads/2020/03/cho-chihuahua.jpg",
        char: `Chó Chihuahua là giống chó nhỏ con có đầu tròn và mõm ngắn. Đôi mắt chúng to, tròn và lồi. Đôi tai của Chihuahua to đùng luôn trong trạng thái vểnh lên. 
        • Tuổi thọ
        Chihuahua là giống chó nhỏ nhất thế giới hiện nay.Tuổi thọ của chúng khá cao, từ 10 - 18 năm tùy vào khí hậu và môi trường chúng sống.Ví dụ như nếu sống ở châu Âu và Mỹ thì tuổi thọ từ 15 - 18 năm, còn sống tại quê hương Mexico của chúng thì tuổi thọ từ 13 - 16 năm và ở Việt Nam thì Chihuahua có tuổi thọ từ 10 - 15 năm.`,
        tame: `Chăm sóc cơ thể
        - Những chú chó Chihuahua sở hữu bộ lông mượt tự nhiên nên chúng không cần tắm nhiều, bạn chỉ cần tắm cho chúng 1 tuần / lần là đủ.Khi tắm cho chúng bạn nên nhớ vệ sinh tai, mắt thật kỹ.Hơn nữa, Chihuahua rất hay liếm mặt chủ nên bạn cũng cần vệ sinh răng miệng cho chúng thường xuyên để chúng có hơi thở thơm tho.
        - Đến bác sĩ thú ý để tiêm phòng định kỳ và nhớ tiêm vacxin để phòng tránh các bệnh nguy hiểm.
        - Chỗ ở của chúng phải thật thoáng và sạch sẽ, những ngày thời tiết mùa đông nên giữ ấm cho chúng vì chúng rất sợ lạnh. 
        - Bạn nên cho chúng vận động thường xuyên và vận động mỗi ngày khoảng 15 phút để chúng được tự do đi lại, giao tiếp với thế giới bên ngoài.`,
        nutri: `Chế độ dinh dưỡng
        - Cách nuôi chó Chihuahua trong việc bảo đảm chế độ dinh dưỡng cho chúng cũng rất quan trọng, điều này phù hợp vào từng giai đoạn phát triển của chúng:
            - Sơ sinh -> 3 tháng tuổi: Thức ăn cho chó cảnh Chihuahua giai đoạn này chủ yếu là thức ăn dạng mềm, bạn có thể cho chúng ăn cháo gà, bò xay nhuyễn và ăn 1 ngày 4 bữa. 
        - 3 - 6 tháng tuổi: Khi Chihuahua đã lớn hơn thì bạn có thể cho chúng ăn những thức ăn giàu đạm, canxi và protein như tôm, thịt, trứng và các loại rau củ.Hãy chế biến thành các món ăn dạng mềm và nấu chín để đảm bảo sức khỏe của chúng. 
        - từ 6 tháng tuổi trở đi: Đây là giai đoạn cần bổ sung nhiều dinh dưỡng để Chihuahua có thể phát triển tốt nhất. 2 sản phẩm cung cấp nhiều dưỡng chất mà bạn nên cho chúng ăn là trái cây và sữa bột`,
        sick: [
            {
                name: "Viêm dạ dày",
                sym: `Viêm dạ dày là căn bệnh rất hay gặp ở chó Chihuahua. Nguyên nhân chủ yếu của căn bệnh này là do nguồn thức ăn của chó không được đảm bảo an toàn. Khi đó, vi khuẩn sẽ thâm nhập vào đường tiêu hóa, gây ra những tổn thương trên thành ruột và gây xuất huyết trong niêm mạc ruột của chó Chihuahua.
                Khi mắc phải bệnh này, ở giai đoạn đầu, chó Chihuahua thường sẽ ăn ít lại, và sau khoảng vài ngày, chúng sẽ bỏ ăn hoàn toàn, liên tục sốt ở nhiệt độ cao 39 – 40oC và có triệu chứng nôn mửa.Chihuahua sẽ nôn ra các chất dịch màu vàng thậm chí là lẫn cả máu đỏ, bị tiêu chảy nặng và phân có mùi rất tanh.Nếu như bạn không kịp phát hiện ra, chú chó có thể gặp nguy hiểm do mất sức và mất quá nhiều nước`,
                treat: `Để chữa trị bệnh viêm dạ dày, cách tốt nhất vào khoảng thời gian này là bạn không nên để chú chó thích ăn gì thì ăn. Hãy cung cấp cho chúng thức ăn đã được nấu chín để đảm bảo an toàn. Đặc biệt, để phòng tránh bệnh viêm dạ dày ở chó Chihuahua hiệu quả, bạn nên đưa chó đi tẩy giun định kỳ bằng Vimectin 3 tháng/ 1 lần.`
            },
            {
                name: "Bệnh viêm phế quản",
                sym: `Viêm phế quản cũng là một trong những căn bệnh thường gặp ở chó Chihuahua. Chó Chihuahua đặc biệt dễ bị viêm phế quản vào mùa đông lạnh hay khi thay đổi thời tiết. Đây chính là khoảng thời gian vi khuẩn phát triển mạnh nhất, và dễ dàng tấn công vào hệ miễn dịch của các chú cún. Khi bị viêm phế quản, các chú cún thường sặc nhẹ, sau đó dẫn đến ho khan, thở mạnh vào ban đêm và kèm theo đó là những cơn sốt, khi ho có xuất hiện dịch khí quản. Bệnh  nặng hơn sẽ khiến cún có cảm giác chán ăn, bỏ bữa.`,
                treat: `Để điều trị căn bệnh này hiệu quả, điều quan trọng nhất là sắp xếp một nơi hợp lý, mát mẻ vào mùa hè và ấm áp vào mùa đông, thường xuyên được vệ sinh sạch sẽ. Khi có sự thay đổi về thời tiết, bạn cần hạn chế việc để chú cún ra ngoài. Thêm vào đó, bạn cần phải đảm bảo chế độ thức ăn hợp lý, kết hợp với việc thường xuyên cho chú chó Chihuahua tập thể dục để tăng cường sức khỏe hệ miễn dịch.`
            },
            {
                name: "Bệnh về xương khớp",
                sym: `Chó rất dễ bị mắc các bệnh về xương khớp. Tuy nhiên, những giống chó có khung xương nhỏ như chó Chihuahua có nguy cơ mắc bệnh này cao hơn nhiều. `,
                treat: `Để phòng ngừa chó Chihuahua bị mắc các bệnh về xương khớp, bạn cần phải cung cấp cho chúng thức ăn có chứa nhiều canxi, hạn chế các loại thức ăn có chứa nhiều axit béo vì chất này có thể làm xốp xương khớp, tăng nguy cơ bị gãy xương khi vận động mạnh. Bên cạnh đó, bạn cũng nên tạo ra cho chú chó thói quen tập thể dục thường xuyên để tăng sự dẻo dai của cơ thể.`
            },
            {
                name: "Bệnh dại",
                sym: `Bất cứ giống chó nào đều có thể mắc phải bệnh dại, và Chihuahua cũng không phải là ngoại lệ. Bệnh dại không chỉ gây ra nguy hiểm đối với sức khỏe của chú chó mà nó còn gây ảnh hưởng tiêu cực đến với con người và các loài vật xung quanh. Tuy nhiên, bệnh dại cần một thời gian để ủ bệnh vì thế, khó có thể nhận biết căn bệnh này từ sớm. Khi có dấu hiệu thì bệnh đã phát triển đến mức nặng hơn, và nếu không được chữa trị kịp thời có thể dẫn đến những hậu quả không nhỏ.
                Các dấu hiệu nổi bật khi chó Chihuahua mắc phải bệnh này đó là dữ hơn bình thường, miệng lúc nào cũng chảy dãi, có những hành động bất thường, không kiểm soát được hành vi.Đến khi nặng hơn, các chú cún có thể dần bị liệt toàn thân và dẫn đến cái chết.`,
                treat: `Cách phòng tránh bệnh này tốt nhất là bạn cần tuân thủ tiêm phòng cho các chú cún định kỳ, hạn chế để chú chó tiếp xúc với chó lạ, cung cấp thực đơn thức ăn lành mạnh.Nơi ở của Chihuahua cũng phải thường xuyên được vệ sinh sạch sẽ.`
            }

        ]
    },
    {
        type: "Chó Bully",
	image : "https://image-us.eva.vn/upload/4-2020/images/2020-10-13/image9-1602572307-393-width640height459.jpg",
        char: `Chó Bully có ngoại hình săn chắc cùng những khối cơ bắp vạm vỡ và nở nang khiến khuôn mặt chúng có phần hơi dữ dằn. Bully có một chiếc đầu to trông rất hầm hố và đồ sộ. Vầng trán chúng rộng chứng tỏ chú chó này rất thông minh. Hai mắt của chúng cách xa nhau, mõm chúng tương đối rộng cùng với hàm răng sắc nhọn. Nhờ vào hàm răng khỏe mà chúng nhai rất tốt.
        Đôi chân của Bully thẳng và khỏe.Hai chân sau có xu hướng chếch ra ngoài nên khiến dáng đi chúng hơi khệnh khạng.
        Bộ lông của chúng phổ biến với màu đơn, khoang và màu đốm.Có những chú Bully sở hữu cả 3 màu khác biệt và giá của chúng không hề rẻ.
        • Tuổi thọ
        Bully có tuổi thọ từ 8 đến 12 năm. `,
        tame: `
        • Cách nuôi
        - Chăm sóc sức khỏe
        - Thường xuyên cho Bully vận động để có một thân hình đẹp
        - Chế độ dinh dưỡng
        - Khẩu phần ăn của chó Bully đòi hỏi có độ đạm cao như các loại thịt, lòng trắng trứng, gan lợn, cổ gà, phổi bò, nội tạng động vật, sữa, trứng vịt lộn, ...Bên cạnh đó, nên kết hợp thức ăn giàu đạm với những thức ăn chứa tinh bột cao.`,
        nutri: `* 1 - 2 tháng tuổi: Nên cho chó ăn các loại thức ăn băm 
        nhuyễn và bổ sung thức ăn khô bán trên thị trường.Nên cho chó ăn nhiều một chút, khoảng 4 - 5 bữa / ngày.
        * 2 - 6 tháng tuổi: Giai đoạn này nên bổ sung cho chó ăn những loại thức ăn giàu calo, protein, ...và cho chó tập ăn dần thịt, cá, tôm, rau củ với tần suất ăn là 3 - 4 bữa / ngày
        * 6 tháng trở đi: Từ giai đoạn này nên rút bớt lại khẩu phần ăn của và tăng cường dinh dưỡng trong khẩu phần ăn như các thực phẩm giàu protein, chất xơ và đạm cùng các loại rau xanh.Như vậy chó Pug sẽ tăng trưởng khỏe mạnh và phát triển thể lực.`,
        sick: [
            {
                name: "Bệnh ghẻ lở do vi khuẩn Sarcoptic",
                sym: `Đây là một trong những bệnh thường gặp ở chó Bull. Ghẻ ngầm đào rãnh dưới biểu bì lấy dịch lâm ba và dịch tế bào làm chất dinh dưỡng. Vòng đời của ghẻ khoảng 15 - 21 ngày. Mặc dù ghẻ lở không gây nguy hiểm quá nhiều đến tính mạng nhưng lại có khả năng gây nhiễm trùng thứ phát, khiến cho bệnh phát triển trầm trạng, thú cưng của bạn sẽ vô cùng đau đớn, khó chịu.`,
                treat: `Khi phát hiện những đốm ghẻ trên da chó bị chảy máu, rỉ mủ, bạn cần mời ngay bác sĩ thú y đến tận nhà hoặc đưa bé đến các trung tâm để khám chữa kịp thời. Để tránh những mầm bệnh có thể tái phát về sau, các sen đừng quên dọn dẹp nơi ở của boss thật sạch sẽ. Đồng thời sử dụng các biện pháp bảo vệ an toàn cho bản thân để tránh lây lan sang con người.`
            },
            {
                name: "Bệnh Parvovirus",
                sym: `Khi mắc bệnh này, hệ tiêu hóa của chó Bull  sẽ không còn khả năng đảm đương tốt trách nhiệm của mình. Bệnh đặc biệt nguy hiểm nếu đối tượng mắc phải là những chú chó Bull sơ sinh.`,
                treat: `Khi mắc bệnh này, chó sẽ liên tục nôn ói, đi tiêu chảy nhiều lần, thậm chí đi ngoài ra máu. Khi tiếp xúc với nó, bạn sẽ cảm thấy mùi tanh hôi rất rõ rệt. Cho đến nay, mặc dù vẫn chưa có thuốc phòng ngừa cho bệnh này nhưng bạn vẫn có thể đề phòng bằng cách tiêm vắc xin cho boss nhé!`
            },
            {
                name: "Bệnh Lepto",
                sym: `o với những bệnh ở trên, bệnh Lepto không chỉ gây nguy hiểm cho chó mà còn có khả năng lây lan sang con người. 
                Đặc biệt, tỷ lệ mắc bệnh ở những con đực lại cao hơn so với những con cái.Đây cũng chính là một trong những bệnh thường gặp có chó Bull, có tỷ lệ tử vong cao từ 60-100 %`,
                treat: `Khi mắc bệnh này, boss sẽ có triệu chứng sốt cao 40,5 – 41°C bỏ ăn, mệt mỏi. Sau đó thân nhiệt giảm xuống tới 37 – 38°C, chó ủ rũ, khó thở, khát nước, nôn mửa thậm chí có thể chảy máu mũi và nôn ra máu.`
            },
            {
                name: "Các bệnh liên quan đến quá trình chọn lọc sinh sản",
                sym: `Một số nghiên cứu gần đây của Mỹ chỉ ra rằng, những sai lầm trong việc chọn lọc sinh sản sẽ gây ra những căn bệnh cực kỳ nguy hiểm cho chó Bull Pháp. Những bệnh này thường gặp ở chó Bull lai tạo hơn là giống thuần chủng.`,
                treat: `Nguyên nhân là để tạo ra những chú Bull có gương mặt xệ, chân ngắn hơn, người ta đã lạm dụng phương pháp lai tạo, nhưng thật không may là điều này càng khiến cho chúng gặp nhiều vấn đề về sức khỏe hơn.`
            }

        ]
    },
    {
        type: "Chó Corgi",
	image : "https://i.khoahoc.tv/photos/image/2019/09/10/cho-corgi-1.jpg",
        char: `Giống chó Corgi có đặc điểm chung là thân hình dài và 4 chân ngắn, những chú chó nào có thân hình càng dài thì càng đẹp. Chó Corgi có đôi tai hình tam giác dựng thẳng rất đáng yêu. Tai và mặt chúng có tỷ lệ hết sức cân đối, mắt to tròn, miệng và khuôn hàm nhỏ cực kỳ sắc nhọn. Nhìn tổng thể chú ta rất giống loài cáo và Corgi còn được gọi với cái tên là Foxy Dog. 
        Corgi có bộ lông ngắn, mỏng và cực kỳ mềm mượt sẽ giúp cho Corgi giữ ấm cơ thể khi thời tiết lạnh. 
        Chó Corgi có hai loại là pembroke corgi và cardigan corgi và tuổi thọ của chúng thì khác nhau.Tuy nhiên, tuổi thọ của chúng cũng không chênh nhau là mấy.Nếu Pembroke corgi có tuổi thọ từ 12 - 14 năm thì Cardigan Corgi cũng chỉ nhỉnh hơn chút là từ 12 - 15 năm.`,
        tame: `Chăm sóc sức khỏe
        - Nhiệt độ môi trường sống lý tưởng của Corgi là 25 - 30 độ C.
        - Hãy cho Corgi được chạy nhảy mỗi ngày vì chúng luôn đòi hỏi được ra ngoài vận động`,
        nutri: `Chế độ dinh dưỡng
        - 1 - 2 tháng tuổi: Giai đoạn sơ sinh nên chó Corgi ăn cháo thịt nạc hoặc cơm nhão say nhuyễn.Ngoài ra nên bổ sung sữa ấm cho chúng.Corgi cần được ăn nhiều bữa trong ngày, khoảng 4 - 5 bữa. 
        - 3 - 6 tháng tuổi: Bổ sung thêm thịt, cá, tôm, trứng, rau củ, ngũ cốc vào khẩu phần ăn của chúng.Nhưng vẫn nên xay nhuyễn chúng rồi trộn vào cơm.Giai đoạn này Corgi chỉ cần ăn 3 - 4 bữa/ ngày
        - 6 tháng tuổi trở lên: Bổ sung thêm nhiều protein và canxi để cơ xương phát triển chắc khỏe.Cùng với đó là các chất xơ, vitamin trong các loại rau, củ.Giai đoạn này nên cho Corgi ăn 2 - 3 bữa / ngày.`,
        sick: [
            {
                name: "Bệnh béo phì",
                sym:   `Béo phì là căn bệnh hay gặp nhất ở những giống chó chân lùn như Corgi. Do Corgi không được vận động thường xuyên, năng lượng thừa tích tụ lâu ngày dẫn đến béo phì. Bên cạnh đó, chó Corgi có hệ thống đường ruột tương đối yếu nên bạn cần phải thật chú trọng trong chế độ ăn uống cho chúng. Chỉ vì thương và yêu chiều cún cưng mà sen cho chúng ăn nhiều chất béo một chút cũng sẽ ảnh hưởng đến cân nặng của Corgi đấy.`,
                treat: `Việc phòng tránh bệnh béo phì cho chó Corgi không phải là khó. Bạn chỉ cần chú ý đến chế độ dinh dưỡng cung cấp hằng ngày cho bé hoặc có thể nhờ bác sĩ thú y tư vấn để có được thực đơn khoa học nhất dành cho cún cưng nhà mình nhé.`
            },
            {
                name: "Bệnh rụng lông",
                sym: `Chó Corgi có bộ lông rất dày. Đôi khi do nhiệt độ quá cao mà bé có thể bị rụng lông nhiều hơn bình thường. Ngoài ra, cũng có thể bé bị rụng lông do các ký sinh trùng, nấm mốc trên da, dị ứng thức ăn,… gây ra. Dù việc rụng lông theo chu kỳ là điều dễ hiểu ở chó, nhưng sen cần xác định chính xác nguyên nhân thì việc chữa trị mới hiệu quả.`,
                treat: `Để cho Corgi không bị mắc bệnh rụng lông, sen hoàn toàn có thể kiểm soát được thông qua những công việc đơn giản hàng ngày. Sen hãy tắm gội thường xuyên cho cún để các vi khuẩn không có cơ hội ký sinh trên da. Đồng thời, phải giữ nơi ở cho cún cưng sạch sẽ, khô thoáng và cung cấp cho cún một chế độ dinh dưỡng đầy đủ.`
            },
            {
                name: "Bệnh xương khớp",
                sym:   `Đặc điểm đáng yêu của Corgi chính là hình dáng mập tròn được đặt trên bốn chân ngắn nhỏ nhắn, nhưng đây cũng chính là điểm yếu của chúng. Bởi phải chịu đựng sức nặng của cơ thể, các khớp xương chân của chó Corgi yếu dần mỗi ngày, khiến Corgi hay bị mỏi, đau chân và gây ra bệnh xương khớp. Một nguyên nhân khác có thể kể đến là do chó Corgi chạy nhảy quá nhiều, khiến cho những chiếc chân ngắn không có đủ thời gian nghỉ ngơi và hồi phục, nên khớp xương chân của Corgi bị suy yếu theo thời gian. Đa phần chó Corgi khi bước vào độ tuổi trung niên (6-7 tuổi) đều mắc phải bệnh viêm cột sống và thoái hóa xương khớp, gây khó khăn cho việc di chuyển.`,
                treat: `Trong trường hợp này bạn chỉ có thể cung cấp đầy đủ canxi cho cún để ngăn ngừa bệnh. Đồng thời, sen nên cho cún cưng vận động tối đa 30 phút một ngày. Không hoạt động quá sức và quá nhiều sẽ giúp các khớp xương của Corgi có thời gian bình phục và giảm thời gian thoái hóa. Chó Corgi rất dễ mắc các bệnh về xương, đường ruột hay rụng lông, tuy nhiên bạn hoàn toàn có thể phòng tránh những bệnh đó cho bé bằng những việc quan tâm và yêu thương bé nhiều hơn.Đặc biệt, bạn nên đưa chó Corgi đến các bệnh viện thú y để đăng ký tiêm phòng định kỳ.`
            }
            
        ]
    },
    {
        type: "Chó Doberman",
	image : "https://azpet.com.vn/wp-content/uploads/2019/10/thong-minh-nang-dong-doberman-mobile.jpg",
        char: `Những chú chó Doberman có thân hình lực lưỡng, cao to khỏe mạnh và rất cứng cáp. Doberman đực sở hữu chiều cao lý tưởng từ 68 đến 72 cm và nặng khoảng 40 - 45cm, còn những chú Doberman cái sở hữu chiều cao từ 63 - 68 cm và nặng khoảng 32 đến 35kg. 
        Dòng Doberman hiện nay phổ biến với hai màu lông là màu đen viền vàng và màu hung viền đỏ.Đặc biệt, bộ lông của chúng lúc nào cũng bóng bẩy mượt mà trông rất quý ông.
        • Tuổi thọ
        Chó Doberman là giống chó sống thọ nhất trong 4 giống chó huyền thoại của Đức với tuổi thọ từ 10 - 14 năm.`,
        tame: `Chăm sóc sức khỏe
        - Doberman chịu lạnh rất kém nên khi thời tiết chuyển lạnh cần có biện pháp giữ ấm cho chúng như mặc thêm quần áo ấm, cho chúng nằm gần lò sưởi, trang bị đầy đủ chăn đệm. 
        - Tập thể dục hằng ngày và tạo cho chúng những trò chơi như đuổi bắt bóng, bắt gậy, nhảy cao hay bắt đĩa trên không.`,
        nutri: `Chế độ dinh dưỡng
        - Những chú chó Doberman ăn rất nhiều nên khá tốn cơm tốn gạo. 
        - Trung bình một em Doberman nặng 30 – 40kg mỗi ngày sẽ cần tới 1 – 1,
        5kg thức ăn(tương đương với 3,
        5 – 4% tổng khối lượng cơ thể), tùy vào độ tuổi và mức độ hoạt động hàng ngày.Trong số 1,
        5kg thức ăn này sẽ cần 45 % khối lượng là thịt hoặc nội tạng(để đảm bảo thành phần dinh dưỡng 30 % đạm và 15 % chất béo), tức vào khoảng 650 – 700g thịt / ngày.Khối lượng còn lại(khoảng 800g) sẽ là cơm(cháo hoặc bánh), rau củ quả, … để cung cấp tinh bột, chất xơ và vitamin.`,
        sick: [
            {
                name: "Bệnh cơ tim giãn nở ở chó",
                sym:   `Có một điều ít người biết là gần như những chứng bệnh ở Doberman đều tương tự như con người. Một trong những bệnh thường gặp ở các bé mà bạn có gặp là giãn nở cơ tim. Khi mắc căn bệnh này, các bé Doberman thường gặp vấn đề khá nghiêm trọng liên quan đến hô hấp. Và việc bệnh kéo dài cũng sẽ ảnh hưởng rất lớn đến hoạt động sinh hoạt đời thường của các bé
                Tác động của bệnh
                Bệnh cơ tim giãn nở thực chất là hiện tượng trái tim của các bé Doberman phát triển to hơn mức thông thường.Việc khối lượng tim tăng đột biến sẽ khiến các cơ tim trở nên dày và yếu hơn hẳn so với một trái tim bình thường.Sự thay đổi này sẽ dẫn đến hiện tượng rối loạn chức năng tim, màng tim bị tổn thương nghiêm trọng và các bé có thể bị thiếu máu.Thậm chí, nếu bệnh tiến triển quá nặng, các bé có thể gặp các triệu chứng như suy tim hay suy hô hấp.
                Bệnh cơ tim giãn nở khiến Doberman ốm yếu đi rất nhiều
                Triệu chứng bệnh
                Mặc dù là căn bệnh khá nguy hiểm nhưng những biểu hiện bộc lộ về căn bệnh này lại không hề rõ ràng.Theo đó, bạn chỉ có thể phán đoán bệnh tình của bé dựa trên những biểu hiện rất mơ hồ sau:
                • Các bé Doberman trở nên trầm tĩnh hơn hẳn bình thường.Các bé sẽ chỉ nằm im một chỗ hoặc thỉnh thoảng mới di chuyển.Ngoài ra, các bé cũng luôn thể hiện một thái độ trầm mặc, không tỏ ra hào hứng hay vui vẻ gì khi nhìn thấy chủ
                • Các bé Doberman thỉnh thoảng sẽ bị ngất xỉu không rõ lý do
                • Bệnh phát triển khiến các bé luôn cảm thấy khó thở và trở nên yếu đuối, hoàn toàn mất đi sự hung dữ, mạnh mẽ thường thấy.`,
                treat: `Điều trị bệnh
                Rất khó để có thể xác định bệnh của các bé chỉ dựa trên những hiện tượng chung chung như trên.Chính vì thế, để xác định chính xác vấn đề mà các bé cưng của mình mắc phải, bạn nên đưa các bé đến phòng khám thú y để siêu âm.Bằng phương pháp siêu âm tim, các bác sĩ thú y sẽ có thể kết luận được xem liệu bé có mắc bệnh giãn nở cơ tim hay không.
                Nếu mắc bệnh, tuỳ theo mức độ, bác sĩ thú y cũng sẽ được ra được cách điều trị cũng như chăm sóc tốt nhất.Đồng thời, nếu bệnh đã phát triển quá nặng, việc phẫu thuật giãn nở cơ tim DCM cũng là cách hiệu quả nhất để giúp các bé quay trở lại cuộc sống bình thường.
                Để mắc căn bệnh thường gặp của chó Doberman này thì một phần là do những người chủ thường chủ quan và không đưa các bé đi khám định kỳ.Vì vậy, để chắc chắn rằng các bé luôn khỏe mạnh và có thể phát hiện kịp thời nếu như các bé mắc bệnh, bạn cần chú ý đến điều này hơn.
                Hiện nay, các chuyên gia vẫn đang tích cực nghiên cứu loại bệnh này với mục đích tìm ra những phương pháp điều trị mới đồng thời xác định được các biểu hiện di truyền.Vì vậy bạn hoàn toàn có thể an tâm rằng các bé sẽ được an toàn nếu như kịp thời phát hiện và chữa trị đúng cách căn bệnh này nhé!`
            },
            {
                name: "Bệnh Von Willebrand ở chó",
                sym: `Một trong những bệnh thường gặp của chó Doberman mà bạn không nên bỏ qua chính là Von Willebrand. Đây vốn là một loại bệnh di truyền mà các bé rất dễ mắc phải. Tuy nhiên nếu được điều trị đúng cách thì bạn không cần phải quá lo lắng và sự an toàn của các bé nữa.
                Bệnh Von Willebrand ở chó khiến các bé bị rối loạn chảy máu
                Tác động của bệnh
                Von Willebrand thực chất là một dạng bệnh rối loạn chảy máu có tính di truyền, thường được gọi tắt là VWD.Căn bệnh này của các bé Doberman cũng tương tự như bệnh máu khó đông ở con người.Theo đó, khi mắc bệnh, chỉ cần gặp vết thương ngoài da khiến cơ thể bị chảy máu thì rất khó để cầm máu lại cho chúng.
                Triệu chứng bệnh
                Để nhận biết xem liệu Doberman có bị mắc chứng bệnh này không, bạn có thể dựa vào những biểu hiện khá rõ ràng sau:
                • Doberman có hiện tượng bị chảy máu cam thường xuyên mà không phải do va đập hay các yếu tố khác tác động
                • Doberman khi đi tiểu hay đi đại tiện đều để lại máu
                • Nướu của Doberman có hiện tượng chảy máu`,
                treat: `Điều trị bệnh
                Mặc dù là một loại bệnh rối loạn chảy máu nhưng thực tế, Von Willebrand không đáng sợ như nhiều người vẫn nghĩ.Và thực tế, bạn hoàn toàn có thể chữa khỏi bệnh cho các bé nếu áp dụng một phương pháp đúng cách.Một trong những cách bạn có thể xác định được bệnh chính là dựa vào yếu tố di truyền.Tất  cả những gì bạn cần làm là đưa các chúng đến phòng khám thú y và để các bác sĩ lấy máu xét nghiệm.
                Việc xét nghiệm kiểm tra VWD nên tiến hành trước khi Doberman đến thời kỳ động dục.Nếu chúng nhiễm bệnh, bạn không nên để Doberman giao phối và sinh sản bởi thế hệ con sinh ra sẽ mắc chính căn bệnh mà bố mẹ của chúng đã từng.Bên cạnh đó, với sự phát triển của y khoa, bạn có thể an tâm khi cho Doberman nhiễm VWD thiến hay thực hiện những cuộc phẫu thuật khác mà không sợ bị mất máu.`
            },
            {
                name: "Bệnh viêm gan hoạt động tính mãn tính (CAH) ở chó",
                sym:   `Nếu bạn nghĩ viêm gan là căn bệnh chỉ xảy ra ở người thì bạn đã lầm to rồi đấy. Thực tế, ở Doberman, chúng cũng có thể mắc bệnh viêm gan. Và người ta vẫn thường gọi loại bệnh này bằng một cái tên khác là CAH.
                hoạt động tính mãn tính là một căn bệnh rất nguy hiểm với Doberman
                Tác động của bệnh
                Viêm gan ở Doberman được hiểu là một loại bệnh xuất hiện khi gan ở Doberman không thể thực hiện chức năng chuyển hoá các loại thực phẩm mà chúng ăn.Việc chuyển hoá bị đình trệ dẫn đến hiện tượng lượng động tố cần được đào thải lại đọng bên trong cơ thể.Lâu dần, chúng sẽ tích tụ thành các mô sẹo dẫn đến hiện tượng suy gan và nguy hiểm hơn là có thể khiến Doberman tử vong.
                Triệu chứng bệnh
                Thời gian khoảng từ 4 đến 6 tháng tuổi là lúc Doberman dễ mắc bệnh nhất.Và để nhận biết được dấu hiệu bệnh, bạn có thể dựa vào những biểu hiện của chúng dưới đây:
                • Thời gian đầu mắc bệnh, Doberman sẽ luôn trong tình trạng khát khô cả cổ và luôn tìm nước để uống.Thậm chí, sẽ có ngày bạn thấy dường như chúng chỉ dành thời gian để uống nước thay vì ăn uống và vui đùa
                • Sau khi bệnh phát triển, các bé sẽ có những biểu hiện rõ hơn là cảm thấy ăn không ngon miệng, thường xuyên bỏ bữa dẫn đến tình trạng sụt cân, ốm yếu.Không chỉ vậy, bụng của Doberman luôn trong trạng thái giữ nước và có nhiều trường hợp chúng rơi vào tình trạng hôn mê, không tỉnh táo.`,
                treat: `Điều trị bệnh
                Mặc dù chỉ dựa vào những biểu hiện trên, bạn không thể chắc chắn được rằng Doberman có thực sự bị viêm gan hay không.Vì vậy nếu nghi ngờ, bạn nên đưa chúng đến các trung tâm thú y để tiến hành xét nghiệm và khám tổng quát.
                Điều trị bệnh kịp thời sẽ giúp các bé nhanh chóng hồi trở về trạng thái bình thường
                Lúc này, các bác sĩ sẽ thực hiện sinh tiết và kiểm tra nồng độ men gan ở các bé.Mặc dù phát hiện ra bệnh sớm nhưng không có một cách nào để chữa khỏi hẳn căn bệnh này.Bạn chỉ có thể giúp Doberman cảm thấy tốt hơn bằng việc cải thiện chất lượng chế độ dinh dưỡng của chúng mà thôi.
                Theo đó, bạn cần đảm bảo khẩu phần ăn của chúng có đủ các dưỡng chất cần thiết và nên hạn chế cho chúng ăn các loại thức ăn đóng hộp.Không chỉ vậy, bạn cũng không nên cho Doberman ăn các loại thực phẩm như đậu, vỏ sò, ngũ ngốc hay gan.Đồng thời, với những chú Doberman bị CAH thì bạn nên cho chúng uống nước cất thay vì các loại nước thường.Điều này sẽ giúp gan của chúng bớt “mệt” hơn khi “làm việc” đấy.`
            },
            {
                name: "Những bất ổn trong đốt sống cổ ở chó",
                sym:   `Nếu đang tìm hiểu về những chứng bệnh thường gặp của chó Doberman thì hội chứng hay do dự chính là một loại bệnh mà bạn cần lưu ý. Loại bệnh này còn được biết đến với một cái tên là hiện tượng bất ổn trong đốt sống cổ ở Doberman.
                Tác động của bệnh
                Đây là một loại bệnh rối loạn thần kinh thường xảy ra ở các bé Doberman thường đã bước sang tuổi thứ 3. Bệnh xuất hiện tuỷ sống của chúng bị né ở một số đoạn nào đó khiến cổ của Doberman gặp vấn đề.Khi bệnh càng phát triển nặng thì khả năng đi lại ổn định của Doberman càng bị ảnh hưởng.
                Triệu chứng bệnh
                Để nhận biết loại bệnh này ở chó Doberman, bạn có thể dựa vào một số biểu hiện triệu chứng tiêu biểu sau:
                Những bất ổn trong đốt sống cổ ở chó
                • Doberman không thể đi từng bước chắc chắn mà luôn có vẻ lung lay, bấp bênh
                • Chân sau của Doberman yếu hẳn đi và không thể giữ chắc phần hông khi di chuyển
                • Chân trước của Doberman đi những bước rất ngắn và thường xuyên bị co giật khi đi hay chạy nhảy
                • Ảnh hưởng xương đốt sống khiến cổ của Doberman bị cong xuống một cách bất thường và khiến các bé liên tục cảm nhận được những cơn đau ập đến.`,
                treat: `Điều trị bệnh
                Hiện tượng bất ổn trong đốt sống cổ ở Doberman thường chỉ diễn ra khi chúng trưởng thành nên rất khó để có thể xác định được nguyên nhân gây ra hội chứng này.Tuy nhiên có một điều bạn có thể an tâm là có khá nhiều phương pháp chữa trị hiệu quả căn bệnh này ở Doberman.Tuy nhiên có một điều khá xấu là những “nàng” Doberman cái sẽ mất đi khả năng làm mẹ khi mắc phải căn bệnh này.
                Nếu như phát hiện bệnh kịp thời, bạn có thể điều trị bệnh cho Doberman bằng cách để chúng nghỉ ngơi và cho chúng dùng thuốc tăng cơ bắp steroid.Tuy nhiên, khi bệnh phát triển nặng hơn thì bạn không thể sử dụng cách này.
                Thay vào đó, bạn cần áp dụng các phương pháp châm cứu để giảm bớt cơn đau ở Doberman và thực hiện phẫu thuật chỉnh hình cho chúng.Đây là một căn bệnh không quá nguy hiểm nhưng rất phức tạp trong cách điều trị nên nếu chú Doberman nhà bạn có hiện tượng bệnh thì hãy đưa chúng đến các phòng khám thú y ngày nhé!`
            },
            {
                name: "Bệnh suy giáp ở chó",
                sym:   `Với bất kỳ một người nuôi chó nào không chỉ riêng Doberman đều ít nhiều đã nghe đến bệnh suy giáp ở chó. Cũng giống như bệnh suy tuyến giáp của con người, ở loài chó, cụ thể là Doberman, sự suy giảm trong quá trình sản xuất hormone tuyến giáp là nguyên nhân chính gây nên bệnh này.
                Doberman ít vui vẻ hẳn đi khi mắc bệnh suy giáp
                Triệu chứng bệnh
                Suy tuyến giáp là một trong những chứng bệnh thường gặp của chó Doberman.Tuy nhiên, khi mắc bệnh, Doberman sẽ không có những biểu hiện quá rõ ràng và bạn không thể xác định chắc chắn rằng liệu chúng có thực sự mắc bệnh hay không.Nhưng dựa vào những biểu hiện này, bạn cũng có thể nghi ngờ và đưa Doberman đi khám để kiểm tra sức khỏe.Theo đó, bạn có thể dựa vào những biểu hiện bệnh sau đây:
                • Doberman khi mắc bệnh thường xuyên bị ngất xỉu hoặc rơi vào tình trạng hôn mê
                • Thay vì vui vẻ như mọi khi, Doberman lại luôn thể hiện tâm trạng phiền muộn và chỉ nằm yên một chỗ
                • Da của Doberman trở nên khô ráp hơn và cực kỳ nhạy cảm với nhiệt độ`,
                treat: `Điều trị
                Dựa vào những biểu hiện đầu tiên, người chủ không thể xác định được chắc chắn về khả năng mắc bệnh suy tuyến giáp ở Doberman.Vì vậy, nếu chó của bạn xuất hiện những triệu chứng trên, bạn nên đưa chúng đến các phòng khám thú y.
                Tại đây, chúng sẽ được xác định khả năng mắc bệnh bằng cách khám tổng quát, kiểm tra nước tiêu và xét nghiệm máu.Sau khi xác định bệnh, các bác sĩ sẽ kê đơn thuốc cho Doberman và tư vấn cách điều chỉnh khẩu phần ăn cũng như những điều cần nên tránh trong quá trình chữa trị cho người chủ.Và nếu bạn thực hiện theo đúng những gì các bác sĩ yêu cầu thì những chú chó Doberman rất nhanh thôi sẽ trở nên tốt hơn.`
            },
            {
                name: "Hội chứng tăng huyết áp và Volvulus",
                sym:   `Nói đến chứng bệnh nguy hiểm bậc nhất  và cũng là bệnh thường gặp của Doberman thì bạn sẽ không thể bỏ qua hội chứng tăng huyết áp và hội chứng Volvulus. Đây có thể nói là một trong những “cơn ác mộng” khiến nhiều người nuôi Doberman lo lắng vì chúng thực sự rất nguy hiểm. Vậy bạn biết bao nhiêu về loại bệnh này?
                Doberman trở nên cạn kiệt sức lực và đau đớn khi mắc hội chứng tăng huyết áp và Volvulus
                Tác động và nguyên nhân của bệnh
                Hội chứng tăng huyết áp và Volvulus thực chất là tên mà các chuyên gia dùng để nói về hiện tượng xoắn dạ dày ở Doberman, một vị trí nằm giao giữa thực quản với ruột.Đây được xem là một căn bệnh cực kỳ nguy hiểm không chỉ riêng với Doberman mà còn cả những giống chó khác khi nó gây ra hiện tượng tích tụ khí, tắc nghẽn mạch máu và thực phẩm trong quá trình tiêu hoá.
                Nguyên nhân chủ yếu dẫn đến việc mắc bệnh ở Doberman thường là do các bé ăn quá no hoặc đang gặp những rắc rối về việc tiêu hoá.Bên cạnh đó, việc các bé ngày lập tức vận động mạnh, chạy nhảy vui chơi sau khi ăn xong cũng tăng thêm nguy cơ mắc chứng tăng huyết áp và Volvulus ở Doberman.
                Triệu chứng của bệnh
                Khi mắc bệnh, chó cảnh Doberman sẽ biểu lộ một số triệu chứng khá rõ ràng.Và dựa vào những biểu hiện này, bạn có thể nhận ra được tình trạng và kịp thời đưa chúng đến các cơ sở thú y để khám và điều trị.Một số biểu hiện tiêu biểu giúp bạn dễ nhận biết như:
                • Doberman luôn cảm thấy ứ nghẹn ở học nhưng lại không thể nôn ra ngoài được
                • Doberman luôn trong trạng thái bị chảy nước dãi quá nhiều, không kiểm soát được
                • Những hiện tượng đau bụng hay bụng bị phình to thường xảy ra rất phổ biến đối với những chú chó mắc bệnh.
                Doberman đi tiểu quá nhiều khi mắc bệnh`,
                treat: `Điều trị bệnh
                Hội chứng tăng huyết áp và Volvulus khi gây hiện tượng sình bụng sẽ rất nguy hiểm đối với Doberman.Ngày khi có triệu chứng này, Doberman có thể tử vong nếu như không được chữa trị kịp thời.Vì vậy nếu chú chó nhà bạn đang có dấu hiệu phình bụng bất thường thị bạn nên đưa chúng đến các phòng khám thú y ngày lập tức nhé!
                Để điều trị bệnh này, các bác sĩ sẽ tiến hành đưa ống dẫn vào dạ dày Doberman qua họng nhằm  giải nén dạ dày ở chúng.Trong một vài trường hợp, những cơn đau dạ dày ập đến có thể gây ảnh hưởng xấu đến hiệu quả của phương pháp này.Để khắc phục, các bác sĩ sẽ cắm trực trực tiếp một loại kim rất lớn vào bụng Doberman nhằm giảm bớt sự đau đớn và tình trạng xoắn dạ dày quá mức ở chúng trong quá trình điều trị.Sau khi kiểm soát được tình hình, Doberman sẽ được phẫu thuật để gỡ xoắn dạ dày.
                Hội chứng tăng huyết áp và Volvulus ở Doberman là căn bệnh cực kỳ nguy hiểm và cũng rất dễ xảy đến với Doberman.Để hạn chế nguy cơ mắc bệnh, bạn có thể chú ý hơn đến cách phân chia khẩu phần ăn và kiểm soát vận động của Doberman.Thay vì ăn dồn một lần quá no, bạn có thể chia ra thành nhiều bữa ăn trong ngày vào khoảng thời gian hợp lý.Đồng thời, nếu dùng hạt khô, bạn nên ngâm mềm thức ăn trước và có thêm những bữa ăn nhẹ thêm cho Doberman nữa nhé!`
            },
            {
                name: "Chứng loạn sản xương khuỷu Hip Dysplasia ở chó",
                sym:   `Hip Dysplasia là một chứng bệnh phổ biến của chó Doberman khác mà bạn cũng cần quan tâm khi nuôi và chăm sóc chúng. Đây vốn là một loại bệnh dị tật ở khớp hông. Việc mắc bệnh loạn sản xương khuỷu sẽ ảnh hưởng rất lớn đến việc di chuyển và khiến Doberman thường xuyên cảm thấy đau đớn.
                Chứng loạn sản xương khuỷu Hip Dysplasia ở chó khiến chúng lười vận động hẳn đi
                Tác động của bệnh
                Loạn sản xương khuỷu Dysplasia còn được biết đến với một tên gọi khác là dị sản hông.Nguyên do khiến Doberman mắc loại bệnh này chủ yếu là từ di truyền của bố mẹ hoặc do ảnh hưởng bởi các yếu tố đến từ môi trường sống, điển hình là thức ăn.
                Có những chú Doberman đã bộc lộ triệu chứng bệnh rất sớm ngày từ giai đoạn bào thai.Nhưng cũng có một số muộn hơn khi biểu bộ dưới dạng viêm khớp xương sau khi Doberman trưởng thành.
                Triệu chứng bệnh
                Loạn sản xương khuỷu có thể không gây nguy hiểm nhiều cho Doberman nhưng lại khiến chúng gặp khó khăn trong việc hoạt động.Để kịp thời phát hiện và chữa trị bệnh cho chúng, bạn có thể dựa vào những biểu hiện bệnh sau:
                • Doberman trở nên kém hơn hẳn khi tham gia các hoạt động sở trường của mình như leo núi hay đuổi bắt
                • Tốc độ di chuyển của Doberman bất ổn và không thể tăng tốc độ nhanh chóng như bình thường
                • Doberman bước khi khập khiễng khi di chuyển, đi lại, hạn chế vận động cơ thể hẳn đi`,
                treat: `Điều trị bệnh
                Khi nhận thấy những biểu hiện bất thường trên ở Doberman, bạn nên ngày lập tức cho chúng đến các cơ sở khám chữa thú y để có thể xác định chuẩn xác tình trạng của chúng hơn.Lúc này, các bác sĩ sẽ tiến hành kiểm tra tổng quát, lọc máu cũng như chụp X – Quang để xem xét tình trạng xương của Doberman.Nếu bệnh tình của chúng khá nặng thì có thể sẽ phải thực hiện phẫu thuật.
                Điều trị bệnh hiệu quả sẽ khiến tinh thần, trạng thái của Doberman khởi sắc hơn
                Có khá nhiều phương pháp khác nhau được dùng để chữa trị chứng dị sản hông ở Doberman.Tuỳ vào độ tuổi và tình trạng của từng giống chó mà các bác sĩ sẽ tiến hành các phương pháp chữa bệnh khác nhau.Một số cách thức khá phổ biến hiện nay có thể kể đến như dùng thuốc, dùng vật lý trị liệu hay phương pháp thuỷ liệu.Ngoài ra việc áp dụng chế độ giảm cân và kiểm soát ăn uống cũng có tác động rất lớn đến hiệu quả chữa bệnh ở Doberman.`
            }
            
        ]
    },
    {
        type: "Chó Ngao Tây Tạng",
	image : "http://image.vtc.vn/files/toannb/2018/07/21/bi-kich-loai-cho-trieu-do-thanh-thu-hoang-dang-thuong-3-0637531.jpg",
        char: `Chó Ngao Tây Tạng có 4 chân lớn được ví như 4 bàn trụ vững chãi, cắm chặt xuống đất. Một khi đã chạy, chó ngao Tây Tạng có thể vượt qua tốc độ của chó sói, được các nhà thám hiểm phương Tây ví là “to hơn chó sói, mạnh hơn hổ báo và nhanh hơn hươu nai”. 
        Chó Tây Tạng sở hữu cái đầu lớn và khuôn mặt xệ, nhìn rất lạnh lùng và lì lợm.Phần mõm dài và vuông với một cái miệng rộng.Chúng có hàm răng sắc nhọn và lực cắn rất lớn, vì vậy chúng có thể giết bất kỳ con thú nào chỉ bằng một nhát cắn.Ngao Tây Tạng có đôi mắt nhỏ và sắc, hơi xếch một chút.Bộ lông của chúng thì siêu dày và có cấu tạo như lông cừu, có hai lớp bao phủ toàn bộ cơ thể.
        • Tuổi thọ
        Chó Ngao Tây Tạng có tuổi thọ từ 12 đến 15 năm.`,
        tame: `Chăm sóc sức khỏe
        - Cố gắng giữ cho nhiệt độ môi trường sống của chúng không quá 35 độ
        - Không gian sống của chó Ngao Tây Tạng phải gần gũi với thiên nhiên, sân vườn rộng rãi và có rào chắn xung quanh để bảo đảm chúng không thoát ra bên ngoài.`,
        nutri: `Chế độ dinh dưỡng
        - 2 - 4 tháng tuổi: Giai đoạn sơ sinh bạn nên cho chúng ăn cơm và thịt lợn xay nhuyễn, chia thành 3 bữa / ngày.
        - 4 - 8 tháng tuổi: Trong giai đoạn phát triển cần bổ sung nhiều protein thông qua các thức ăn như: thịt bò, thịt nạc, nội tạng động vật và trứng gà, rau củ quả.Lúc này chỉ nên cho chó ăn 2 bữa / ngày
            - 8 - 12 tháng: Ở tuổi này cần tăng cường cho chúng các loại thịt dai: thịt bò, thịt dê, thịt trâu vì chúng rất thích nhai và nhai nhiều.Thức ăn cho chó cảnh Ngao Tây Tạng nên để cả khối.Giai đoạn này nên cho ăn 1 bữa chính và 1 bữa phụ.
        - Trên 1 tuổi: Giai đoạn này nên cho ăn ít nhất 1 kg thịt 1 ngày`,
        sick: [
            {
                name: "Bệnh loạn sản xương khuỷu",
                sym:   `là căn bệnh này chủ yếu gặp ở các giống chó to. Do tốc độ phát triển không đều khiến khớp chân trước của chó bị lỏng. Dẫn đến đau khớp, chân đi lại khập khiễng.`,
                treat: `Bệnh thần kinh do di truyền: bệnh này thường xảy ra khi chó được 6 tuần tuổi. Bệnh ảnh hưởng đến hệ thần kinh, dẫn đến chân sau yếu dần rồi liệt hoàn toàn. Bệnh này không có khả năng chữa trị, tuy nhiên việc chọn giống kỹ lưỡng có thể làm giảm tỉ lệ mắc bệnh.`
            },
            {
                name: "Bệnh về tuyến giáp",
                sym: `suy giảm miễn dịch do rối loạn nội tiết, giảm việc tiết hoocmon tuyến giáp`,
                treat: `Có thể điều trị bệnh bằng thuốc nhưng chú chó nhà bạn sẽ phải sử dụng suốt đời.`
            },
            {
                name: "Bệnh loạn sản xương hông",
                sym:   `do di truyền hoặc do chế độ ăn không khoa học. Những chú chó bị cho ăn quá nhiều. Chúng lớn quá nhanh mà không hoạt động nhiều để tiêu bớt lượng calo đó.`,
                treat: ``
            },
            {
                name: "Những biểu hiện sức khỏe bất thường của chó ngao Tây Tạng",
                sym:   `• Tinh thần không minh mẫn, thiếu năng lượng, cơ thể yếu ớt, không có sức sống
                • Di chuyển chậm chạp, phần đuôi động đậy ít hoặc không cử động, rũ xuống.
                • Ánh mắt nhìn mệt mỏi, không có sức sống
                • Mũi khô, chảy nhiều nước mũi, ốm sốt.Tuy nhiên nếu như mũi chó ngao có khô trong lúc ngủ thì đây lại là hiện tượng bình thường, không có gì phải lo lắng.
                • Đại tiện không bình thường, bị tiêu chảy, táo bón, phân lỏng, đi vệ sinh khó khăn.
                • Chán ăn và giảm cảm giác thèm ăn.Nếu như ngao Tạng ăn thức ăn bẩn hoặc gặp vấn đề về tiêu hóa sẽ xuất hiện chứng nôn mửa, không động đến thức ăn.
                Ngoài những triệu chứng trên, nếu sức khỏe của chó ngao Tây tạng gặp những vấn đề như: ho, đi tiểu khó khăn, ăn linh tinh, tai bị ngứa, hay chà mông trên mặt đất…, bạn cần phải quan sát kỹ lưỡng và đưa chúng đến bác sĩ thú y kịp thời.`,
                treat: `Cách phòng tránh các bệnh ở chó ngao Tây Tạng
                Một số căn bệnh cần thời gian để ủ bệnh.Đặc biệt là đối với những chú chó có cơ thể to lớn như chó ngao, các triệu chứng bệnh ban đầu sẽ không rõ ràng.Nếu chỉ dựa vào dấu hiệu bên ngoài sẽ không thể xác định.Đến khi các triệu chứng thể hiện rõ ra ngoài đã quá muộn.
                Hãy tìm hiểu kĩ tình trạng của chó bố mẹ cũng như chắc chắn chú chó bạn mang về nuôi không mắc các bệnh di truyền.
                Chú ý quan sát các biểu hiện của cún cưng để có thể thăm khám và chữa trị kị thời.Tránh những hậu quả đáng tiếc.`
            }
            
        ]
    },
    {
        type: "Chó Pitbull",
	image : "https://zoipet.com/wp-content/uploads/2020/03/chi-pitbull.jpg",
        char: `Chó Pitbull có nguồn gốc từ châu Mỹ và là một trong những hung thần của những loài chó khác trong nhóm chó chiến. Trong những năm gần đây, Pitbull khá phổ biến ở Việt Nam
        • Tuổi thọ
        Chó Pitbull được cho là hậu duệ của chó Bulldog Anh có tuổi thọ từ 12 - 16 năm.`,
        tame: `Chăm sóc sức khỏe Pitbull luôn trong trạng thái dư thừa năng lượng, bạn nên cho chúng vận động thường xuyên`,
        nutri: `Chế độ dinh dưỡng
        - Tránh thức ăn chứa nhiều ngũ cốc như cơm, ngô, khoai
        - Nên chọn thức ăn giàu protein như thịt nhưng phải ít mỡ, trứng vịt lộn, thịt bò,...
        - Loại thức ăn tốt nhất dành riêng cho Pitbull là loại thức ăn khô dành riêng cho dòng chó cơ bắp của các thương hiệu lớn như Royal Canin, Morando, Smartheart hay Fitmin.`,
        sick: [
            {
                name: "các bệnh xương",
                sym:   `loạn sản xương hông, thoái hóa xương bánh chè và trật khớp. Chó Pitbull cũng có thể bị vấn đề về da như bị ghẻ và dị ứng, vì lông của nó quá ngắn, ngoài ra nó cũng mắc một số chứng bệnh di truyền như đục thủy tinh thể và bệnh tim bẩm sinh.`,
                treat: `Kinh nghiệm:
                – Pitbull khá kén ăn và dị ứng với một số loại thực phẩm vậy nên ngay khi bắt đầu chăm sóc bạn đừng quên xem có biểu hiện nôn hay nhả thức ăn nào đó thường xuyên thì bạn nên đổi sang thực phẩm món ăn khác.
                – Khi thực hiện huấn luyện cho chó Pitbull thì ngày nào cũng phải duy trì đầy đủ, bất chấp điều kiện thời tiết.`
            }
            
        ]
    },
    {
        type: "Chó Yorkshire",
	image : "https://petmaster.vn/petroom/wp-content/uploads/2020/03/cho-yorkshire-7.jpg",
        char: `Chó sục Yorkshire có nguồn gốc từ nước Anh, chúng là giống chó nhỏ bé có bộ lông dáng óng mượt, là giống chó cảnh được yêu chuộng tại các nước Châu Âu.
        • Đặc điểm
        Đặc điểm nổi bật của Yorkshire đó chính là kích thước nhỏ nhắn, cân nặng của chúng rơi vào khoảng 3,
        2kg và chiều cao khoảng 23 cm.Bộ lông phát triển, dài và khá óng mượt.
        Giống chó cảnh này bắt chuột rất giỏi, chúng rất tinh nhanh và nhạy bén.Tính cách thân thiện hòa động và gần gũi với mọi người.Vì nhỏ bé nên Yorkshire hợp với làm thú cưng thay vì làm các công việc nặng nhọc khác.Yorkshire thông minh và cũng rất cần sự quan tâm của chủ nhân, nên khi nuôi chúng hãy dành nhiều thời gian bên cạnh chúng.
        • Tuổi thọ
        Chó Yorkshire có tuổi thọ khá cao, từ 13 - 16 năm.`,
        tame: `Chăm sóc sức khỏe
        - Dùng sữa tắm chuyên dụng để tắm cho Yorkshire đều đặn mỗi tuần 1 - 2 lần.Sau mỗi lần tắm bạn nên sấy khô cho chúng và dùng lược để bỏ bớt những phần lông rụng.
        - Những chú Yorkshire thường hay bị tiết dịch nhờn ở mắt.Bạn nên quan sát và vệ sinh mắt cho chúng thật sạch sẽ. `,
        nutri: `Chế độ dinh dưỡng
        - Bổ sung protein để phát triển xương và cơ bắp của chúng.Protein có trong các loại thức ăn như đùi gà, thịt cừu và thịt bò
        - Cacbohidrat chắc chắn sẽ tốt cho sức khỏe của Yorkshire như gạo, khoai lang,...
        - Yorkshire cần bổ sung các chất béo để bộ lông của chúng luôn mềm mại và óng mượt`,
        sick: [
            {
                name: "Bệnh xương",
                sym:   `Chó Yorkshire là loài có kích thước nhỏ nên rất dễ gặp các chấn thương. Một tai nạn nhỏ, một cú đánh bất chợt cũng khiến phần xương của chúng bị gãy.`,
                treat: ``
            },
            {
                name: "các bệnh liên quan đến đến da, đường tiêu hóa, thoát vị đĩa đệm",
                sym: `Vào mùa đông, chúng rất dễ mắc viêm phế quản vì thế bạn hãy chú ý tới nhiệt độ ngoài trời và mặc thêm đồ cho chúng nếu trời quá lạnh nhé. Ngoài ra, chúng sẽ dễ mắc bệnh dạ dày nếu bạn không cho chúng ăn uống đều đặn hàng ngày.
                Nếu Yorkshire Terrier bị  sút cân nhanh chóng, cơ thể gầy đi thì rất có thể chúng đã bị hạ đường huyết, lượng đường trong máu giảm, khiến chúng không còn đủ năng lượng cho cơ thể đáp ứng những hoạt động thường ngày của mình.`,
                treat: ``
            },
            {
                name: "Mất răng sớm, khó sinh đẻ hay bệnh tai điếc",
                sym:   `Các bệnh thường thấy ở chó Yorkshire Terrier nữa là mất răng sớm, khó sinh đẻ hay bệnh tai điếc,… Nếu phát hiện thấy chú chó của bạn có dấu hiệu khác thường, hãy đưa chúng đến cơ sở thú y để khám và điều trị kịp thời.`,
                treat: ``
            }
            
        ]
    },
   

]

export const dogs2 = [
    {
        type: "Chó Husky",
	image : "https://thucanh.vn/wp-content/uploads/2021/02/anh1.png",
        char: `Siberian Husky, là giống chó có nguồn gốc từ vùng Đông Bắc Siberia, Nga. Tại đây, từ khoảng hơn 3000 năm trước, chúng đã được tộc người Chukchi nuôi dưỡng và huấn luyện để giúp đỡ con người trong việc di chuyển hay vận chuyển hàng hóa.
        • Đặc điểm
        Chó Husky tràn đầy năng lượng và tráng kiện.Chúng thường có một bộ lông hai lớp và có thể có màu xám, đen, đồng đỏ hoặc trắng Đôi mắt của chúng thường có màu xanh nhạt, mặc dù chúng có thể có màu nâu, xanh lục, xanh dương, vàng hoặc dị sắc.
        • Tuổi thọ
        Husky có tuổi thọ từ 12 - 16 năm.`,
        tame: `Chăm sóc sức khỏe
        - Chải lông thường xuyên cho Husky.Chải lông thường xuyên sẽ làm giảm bớt hiện tượng rụng lông ở giống chó này và giữ cho chúng luôn được khỏe mạnh.
        - Vệ sinh tai mỗi tuần một lần cho Husky bằng dung dịch làm sạch tai cho chó. 
        - Kiểm tra móng định kỳ và cắt tỉa chúng nếu cần thiết để tránh nhiễm khuẩn.`,
        nutri: `Chế độ dinh dưỡng
        - Thịt, nội tạng, rau củ, trứng và thức ăn dạng hạt là các loại thức ăn nên cung cấp cho Husky.Đặc biệt là nội tạng, món khoái khẩu của Husky.
        - Từ 2 - 5 tháng tuổi: 4 bữa / ngày; 5 tháng - 1 năm: 3 bữa / ngày; 1 năm trở lên: 2 bữa / ngày.
        - Không cho Husky ăn đồ sống sẽ ảnh hưởng đến tiêu hóa`,
        sick: [
            {
                name: "Bệnh rụng lông",
                sym:   `Khi phát hiện Husky của bạn có các dấu hiệu rụng lông trong thời gian dài, bạn nên đưa chúng tới các cơ sở khám chữa bệnh cho chó, mèo hoặc bệnh viện thú y để được các bác sĩ chuẩn đoán chính xác là rụng lông do rối loạn nội tiết,  rụng lông do da bị nấm hay rụng lông do ve`,
                treat: `Không nên tự điều trị khi chúng ta chưa biết rõ nguyên nhân nhé, phải đưa ngay đến cơ sở thú y gần nhất`
            },
            {
                name: "Bệnh loạn sản xương hông",
                sym: `– Bệnh loạn sản xương hông thường được mọi người gọi với tên khác là dị sản hông.
                – Bệnh này thường sẽ xuất hiện rõ ràng nhất và ta có thể thấy được bằng mắt khi Husky ở độ tuổi 2 năm đầu đời.Chính vì đây là bệnh di truyền, nên trước khi bạn muốn mua một em chó Husky khỏe mạnh thì bạn nên tìm hiểu về căn bệnh loạn sản xương hông này và làm xét nghiệm xem loạn sản này có trong máu của Husky hay không.
                – Đây là căn bệnh khiến Husky phát triển không được khỏe mạnh bình thường.Tình trạng này có thể gây ra viêm, đau, khớp bị lệch, bị trật.Chúng ngăn cản các khớp nối bóng trong và ngoài sẽ gây khó khăn trong quá trình di chuyển của Husky.`,
                treat: ``
            },
            {
                name: "Bệnh cảm",
                sym:   `– Đây là căn bệnh do viêm niêm mạc đường hô hấp. Bệnh này xảy ra với Husky khi chúng thay đổi môi trường sống từ lạnh sáng nóng và nóng sang lạnh. Hoặc có thể là do chủ chăm sóc không chu đáo khiến Husky bị cảm lạnh.
                – Khi bị cảm, Husky trông sẽ yếu ớt, mệt mỏi và có phần tiều tụy xuống sắc.`,
                treat: `Nếu nhận thấy tình trạng bệnh của Husky thì các “sen” nên sử dụng mọi thứ cần thiết để Husky ấm dần lên. Tránh không cho Husky tắm bằng nước lạnh vì lúc này sức đề kháng của chúng đang yếu. Khi tắm nước lạnh thì khả năng phòng bệnh của niêm mạc đường hô hấp cũng không cao. Các vi khuẩn gây bệnh lại sinh sôi nhiều thêm khiến bệnh của Husky càng trở nặng.`
            },
            {
                name: "Bệnh giun đũa",
                sym:   `Đây là bệnh do giun kí sinh trong dạ dày và ruột non ảnh hưởng đến sự sinh sản và phát triển. Bệnh này có thể phòng bằng cách cho Husky khám và sổ giun định kỳ. Đối với Husky nhỏ thì 1 tháng khám 1 lần, Husky trưởng thành thì 3 tháng khám 1 lần`,
                treat: `Nếu phát hiện có giun thì lập tức xổ giun để đảm bảo tốt cho hệ tiêu hóa khỏe mạnh.`
            },
            {
                name: "Bệnh dại",
                sym:   `Đây là bệnh vô cùng nguy hiểm đối với loài cho nói chung và cũng gây nguy hiểm tới cho con người nếu bị cắn`,
                treat: `Cách tốt nhất để bảo vệ sức khỏe cho chó Husky là nên đưa chúng đến các cơ sở thú ý để tiêm phòng dại và kiểm tra định kỳ theo chỉ dẫn của bác sĩ.`
            },
            {
                name: "Các bệnh về mắt",
                sym:   `Các bệnh về mắt thường xảy ra với chó Husky đó là:
                – Bệnh đục thủy tinh thể: Là sự biểu hiện của sự mờ, nhìn không rõ các vật thể xung quanh.Việc này sẽ gây khó khăn cho Husky với việc nhìn thế giới bên ngoài.Bệnh này thường do yếu tố di truyền hoặc do tuổi tác lớn.Bệnh này có thể dẫn đến mù lòa, vậy nên các “sen” khi nuôi Husky cần chú ý đến vấn đề này nhé.
                – Chứng loạn dưỡng giác mạc: Thường thì bệnh này sẽ xuất hiện ở những chó Husky 4 tuổi đời.Bệnh này xuất hiện là do dị khoáng chất trắng đục(có thể là cholesterol hoặc canxi) bị lắng đọng trong giác mạc.Đây là bệnh không viêm.sự phát triển và hình dạng xuất hiện của các khu vực loạn giác khác nhau.Chứng này ít gây ảnh hưởng đến tầm nhìn, và cũng không gây tình trạng mù.
                – Teo võng mạc: Bệnh này sẽ hưởng đến các thụ thể ánh sáng trên võng mạc, và là căn bệnh di truyền.Đây là một dạng thoái hóa về mắt, sau cùng sẽ khiến Husky bị mù nếu không được điều trị`,
                treat: `hãy nên kiểm tra định kỳ cho Husky để tránh tình trạng bệnh trở nặng sẽ không cứu chữa được nhé.`
            },
            {
                name: "Bệnh về đường tiêu hoá",
                sym:   `usky bị mắc bệnh thường do ăn phải thức ăn hay nước uống bị ôi thiu hoặc nhiễm độc. Cũng có thể cún bị bỏ đói quá lâu hay ăn quá no dẫn đến quá tải trong vấn đề tiêu hoá.
                Thời gian phát bệnh ở Husky thường từ 2 đến 5 ngày.Cún sẽ có biểu hiện nằm một chỗ, khó chịu vùng bụng, phân và nước tiểu bị lẫn tạp chất.Bạn cần cho cún ngừng ăn trong 24 giờ để theo dõi.Sau đó, bổ sung các món an toàn như canh rau, cháo để cún dễ tiêu hoá.Tham khảo ý kiến bác sĩ và cho cún uống thuốc phù hợp. `,
                treat: `Bạn có thể phòng bệnh đường tiêu hoá cho cún bằng cách cho ăn đủ và đúng bữa. Thức ăn, nước uống đều phải sạch sẽ, nấu chín từ nguyên liệu tươi ngon. Cân bằng dinh dưỡng bởi những món ăn lành mạnh, phù hợp với từng giai đoạn và thể trạng của Husky.`
            }
            
        ]
    },
    {
        type: "Chó Maltese",
	image : "https://blogyeuchomeo.com/wp-content/uploads/2018/02/giong-cho-maltese.jpg",
        char: `Bạn có thể dễ dàng nhận ra Maltese nhờ những đặc trưng như đầu tròn và nhỏ, khuôn mặt lúc nào cũng toát lên sự kiêu sa và vô cùng đáng yêu. Hai mắt chúng tròn và đen, toát lên sự thông minh và tinh tế. Miệng của Maltese nhỏ, đôi tai dài buông xuống. Đặc biệt nhất là bộ lông dài thướt tha, mềm mại trắng xóa như tuyết của Maltese. 
        Những chú Maltese rất năng động và tinh nghịch.Lúc nào chúng cũng tràn đầy năng lượng và thích chạy nhảy khắp nơi.
        • Tuổi thọ
        Chó Maltese có thể sống được 12 - 15 năm ở Việt Nam và thậm chí sống lâu hơn nếu ở châu Âu và châu Mỹ, do ở đâu có khí hậu thích hợp và điều kiện chăm sóc tiên tiến hiện đại hơn.`,
        tame: `Chăm sóc sức khỏe
        - Mỗi ngày bạn nên dành ra 30 phút - 1 tiếng để đưa chúng đi dạo ở các không gian rộng lớn.Có thể bày các trò chơi vui nhộn cho chúng chơi như đuổi bắt, ném bóng,...
        - Tắm cho Maltese 2 lần 1 tháng
        - Vào mùa hè bạn nên cắt tỉa lông thường xuyên cho chúng`,
        nutri: `Chế độ dinh dưỡng
        - Bạn nấu cháo gà loãng cho Maltese, cho ăn 1 ngày 3 bữa
        - Maltese thích ăn những món ăn được chế biến từ thịt bò, thịt gà và pate gan.Bổ sung thêm vào đó là trứng gà, thịt heo, rau xanh và các loại ra củ,...
        - Đường ruột của Maltese khá yếu nên khi ăn bạn nên chế biến thức ăn thành các miếng nhỏ vừa ăn cho Maltese.
        Shiba Inu có thể có màu đen, đỏ và màu nâu hoặc màu vừng với một lớp lót lông màu kem, màu da bò hoặc cả màu xám.Shiba Inu cũng có cả màu kem.`,
        sick: [
            {
                name: "Lông chó quá dài và cuốn vào nhau",
                sym:   `Nhiều người cho rằng giống chó này nổi bật nhất ở bộ lông. Vì vậy mà nhiều người bán chó Maltese giá bao nhiêu tiền đều dựa trên bộ lông mềm mượt của nó. Chó Maltese có bộ lông rất dài rất dày. Nếu không được chăm sóc thường xuyên, lông sẽ bị rối và thắt nút.
                Nếu thấy lông bị rối, bạn phải nhanh chóng xử lý để tránh dẫn đến những bệnh về da ở chó.Đối với chó bị cuốn lông nghiêm trọng, nên dùng lược hoặc bàn chải chải theo chiều lông mọc.Bắt đầu chải từ chân rồi đến ngọn`,
                treat: `Cách giải quyết vấn đề lông cuốn của chó Maltese:
                • Không để lông ướt: Lông trên cơ thể chó sau khi khô đi sẽ giống lông cừu, bị co lại khi ngâm nước.Lúc này sẽ càng khó chải mượt hơn.Vì thế chó có lông cuốn dính tuyệt đối không được dính nước.
                • Chải lông cho chó từ từ và cẩn thận: Xử lý lông cuốn dính là một công việc cần sự nhẫn nại.Bạn nhất định phải kiên nhẫn.Chải từ từ, không chải quá mạnh, điều này sẽ khiến chó bị đau hoặc bị rụng lông.
                • Dùng hai lược chải lông cho chó: Dùng lược thẳng chải tách lông cuốn dính, từ từ chuyển động từ chân lông đến ngọn lông.Sau khi lông đã rời ra, lại dùng lược bờm chải mượt lông.
                • Sử dụng xịt dưỡng lông chó: Chất xịt lông chứa Lanolin có thể khiến lông dễ chải hơn.
                • Không chải lông quá lâu: Mỗi lần chải lông không vượt quá 10 phút.Kết hợp giữa nghỉ ngơi và khích lệ phù hợp sẽ khiến chó bình tĩnh, không chống đối, giãy dụa.`
            },
            {
                name: "Chó bỏ ăn, biếng ăn",
                sym: `Khi bạn quyết định thực hiện việc mua bán chó Maltese giá bao nhiêu tiền dù rẻ hay đắt thì đó cũng là số tiền lớn. Bạn cần có trách nhiệm chăm sóc cho chú cún của mình để chúng không bị ốm đau và bệnh tật.`,
                treat: `Nếu bạn phát hiện chú chó của mình có dấu hiệu bỏ ăn, có thể là chó bị bệnh , điều này khiến chó thay đổi khẩu vị. Lúc này bạn cần làm rõ nguyên nhân chó Maltese bỏ ăn. Sau đó tiến hành xử lý để có phương pháp điều trị kịp thời.
                Khi phát hiện thú cưng chán hoặc bỏ ăn, chủ nhân cũng không nên vội hoảng loạn.Nên bình tĩnh quan sát tình hình để xác định nguyên nhân chó bỏ ăn.Nguyên nhân có thể là chó bị nhiễm bệnh, thay đổi môi trường sống, ảnh hưởng khí hậu, đồ ăn.Những vấn đề này đều có thể ức chế sự thèm ăn của chó.
                Nếu nguyên nhân chính chó Maltese không ăn là bị bệnh như cảm cúm, bệnh đường ruột… Tốt nhất nên đưa chúng đến bệnh viện gặp bác sĩ.Dựa vào chẩn đoán của bác sĩ về nguyên nhân gây bệnh để điều chỉnh chế độ ăn uống khoa học hơn.
                Chẳng hạn như cho chó ăn Pet Probiotics, điều tiết đường ruột, làm tăng khả năng ăn uống.Ngoài ra bạn cũng phải chú ý đến chất lượng thức ăn.Chỉ chọn lựa thực phẩm tươi sống, không cho chó ăn đồ ôi thiu.Nếu là thức ăn cho chó, tốt nhất nên mua ở Pet Mart để đảm bảo chất lượng.`
            }
            
        ]
    },
    {
        type: "Chó Shiba Inu",
	image : "https://zoipet.com/wp-content/uploads/2020/03/cham-soc-cho-shiba.jpg",
        char: `Shiba Inu có ngoại hình nhỏ gọn với cơ bắp phát triển tốt. Chú chó Shiba Inu đực có chiều cao từ 35 đến 43 cm còn con cái là 33 đến 42 cm. Trọng lượng trung bình ở kích thước tương thích là khoảng 10kg đối với con đực và 8kg đối với con cái. Chúng có hai lớp lông với lớp ngoài cứng và thẳng còn lớp bên trong mềm và dày. Tay và chân chúng giống như tay và chân của cáo. Lông và đuôi chúng hơi dài và xù ra.  
        • Tuổi thọ
        Tuổi thọ trung bình của chó Shiba Inu từ 12 đến 15 năm.`,
        tame: `Chăm sóc sức khỏe
        - Môi trường sống mát mẻ và thông thoáng, sạch sẽ
        - Chó Shiba Inu cần được đi dạo và vận động hằng ngày.Bạn nên cho chúng tham gia một số hoạt động như đi bộ, chạy theo xe, bắt bóng, bắt đĩa bay,...
        - Chúng có bộ lông ngắn nhưng dày và tương đối nhiều, vào mùa hè bạn nên cắt tỉa lông thường xuyên cho chúng.
        - Không nên tắm thường xuyên, chỉ nên tắm 1 tuần / lần`,
        nutri: `Chế độ dinh dưỡng
        - 1 - 2 tháng tuổi: ăn cháo, ăn cơm với thịt xé nhỏ và bổ sung các loại thức ăn khô ngâm mềm khoảng 5 phút.Chia nhỏ thành 4 - 5 bữa nhỏ mỗi ngày
        - 2 - 6 tháng tuổi: Bổ sung vào khẩu phần ăn của chúng nhiều thịt, đặc biệt là thịt bò, tim gan heo, bò cắt nhỏ nấu chín, rau củ, thức ăn khô,...Giai đoạn này ăn 3 bữa / ngày và bổ sung thêm sữa
        - 6 tháng tuổi trở lên: Tăng cường khẩu phần ăn và bổ sung nhiều loại thực phẩm dinh dưỡng nhiều đạm, protein, canxi cho chó,...`,
        sick: [
            {
                name: "Bệnh tăng nhãn áp",
                sym:   `Bệnh tăng nhãn áp là một bệnh lý di truyền ở chó Shiba. Bệnh phá hủy dây thần kinh thị giác trong mắt. Nếu không phát hiện và điều trị kịp thời, chúng gây mất thị lực một phần hoặc mù hoàn toàn. Thật không may là 40% chó Shiba bị bệnh tăng nhãn áp đều bị mù dù đã được phẫu thuật.
                Bệnh tăng nhãn áp ở chó được chia thành hai loại là nguyên phát và thứ phát.Trong đó, trường hợp bệnh thứ phát phổ biến hơn và cũng nguy hiểm hơn.
                Triệu chứng:
                • Chớp mắt hoặc dụi mắt liên tục.
                • Nhãn cầu bị đẩy lùi về phía sau.
                • Lòng trắng mắt nổi rõ những mạch máu màu đỏ.
                • Xuất hiện màng mờ trước mắt.
                • Nhãn cầu to lên(hiện tượng tràn dịch mắt)
                • Đồng tử không phản ứng với ánh sáng, mất thị lực một cách rõ ràng.
                • Triệu chứng phụ như: đau đầu, bỏ ăn, mắt dại đảo liên tục, thích nằm một chỗ, …`,
                treat: `Trong trường hợp bệnh nhẹ, bác sĩ thú y sẽ dùng thuốc nhỏ mắt để làm giảm áp lực mắt. Mục đích để đưa áp lực mắt về mức bình thường trong nỗ lực cố gắng cứu vãn thị lực. Còn trường hợp bệnh nặng, dây thần kinh quang học trên mắt đã bị hư hại thì phương án phẫu thuật sẽ được chỉ định. Nhưng tỷ lệ thành công không cao.
                Phòng tránh:
                Đây là bệnh lý di truyền nên sẽ không có cách phòng tránh cụ thể.Đơn giản nhất, bạn nên đưa chó Shiba đi thăm khám bác sĩ thú y thường xuyên để rà soát bệnh.Phát hiện bệnh sớm, kết quả điều trị sẽ hiệu quả hơn, tránh tình trạng mù lòa.`
            },
            {
                name: "Bệnh teo võng mạc PRA",
                sym: `Bệnh teo võng mạc PRA là căn bệnh thoái hóa mắt do di truyền. Nó xảy ra khi các tế bào cảm quang phía sau mắt bị hủy hoại khiến việc phân biệt màu sắc và khả năng nhìn trong bóng tối bị giảm đi đáng kể. Nếu chưa hiểu lắm thì bạn có thể tưởng tượng: võng mạc đóng vai trò như cuộn phim trong máy ảnh. Khi cuộn phim bị hỏng thì khả năng thu nhận hình ảnh cũng sẽ mất đi.
                Triệu chứng:
                • Triệu chứng bên ngoài: hai đồng tử giãn nở to, thủy tinh thể đục màu cùi nhãn, mắt lác và lồi to, đờ đẫn không có hồn, …
                • Ban đầu, chó Shiba bị hiện tượng “quáng gà”, khả năng nhìn kém khi trời bắt đầu nhá nhem tối.Sau 6 tháng hoặc một năm, bệnh tiến triển nặng sẽ dẫn đến mù hoàn toàn.`,
                treat: `Thật không may, PRA ở chó Shiba sẽ dẫn đến mù hoàn toàn. Không những thế còn gây đau đớn trong một thời gian dài. Bệnh không có cách chữa trị triệt để và cũng không có cách phòng tránh hiệu quả. Tuy nhiên, phát hiện sớm kết hợp với một số loại thuốc chống oxi hóa Antiocidant có thể làm chậm tiến triển của bệnh, kéo dài thời gian nhìn cho chó Shiba.`
            },
            {
                name: "Đục thủy tinh thể",
                sym:   `Bệnh đục thủy tinh thể ở chó Shiba có thể do bẩm sinh hoặc di truyền. Bệnh xảy ra khi ống kính của mắt bị mờ đục dần, cuối cùng rách và mang lại cho con ngươi vẻ ngoài ‘có mây’. Bệnh làm xáo trộn thị giác nên bắt buộc phải điều trị sớm và dứt điểm. Để quá lâu, mắt có thể bị mù lòa, mất thị lực sau một thời gian ngắn mắc bệnh.`,
                treat: `Bệnh đục thủy tinh thể ở chó Shiba không thể điều trị dứt điểm bằng thuốc. Phương pháp duy nhất là phẫu thuật thay tinh thể. Tinh thể mới có thể hồi phục 90-95% thị lực. Sau phẫu thuật, cần tiến hành theo dõi và điều trị trong vòng 6 tháng đầu tiên. Bệnh không có cách phòng tránh cụ thể. Đơn giản chỉ là cho bé Shiba nhà bạn một lối sống và chế độ dinh dưỡng khoa học là được.`
            },
            {
                name: "Bệnh động kinh",
                sym:   `Nguyên nhân bệnh động kinh của chó Shiba có thể liên quan đến các vấn đề tổn thương ở não bộ như: khuyết tật não bẩm sinh, viêm động mạch não, … dẫn đến rối loạn chức năng thần kinh. Bệnh tương đối nguy hiểm nhưng tỷ lệ mắc phải ở chó Shiba không cao, chỉ khoảng 0.5-5.7%.
                Chó Shiba mắc bệnh động kinh thường xuất hiện triệu chứng co giật, miệng sùi bọt, bốn chân co lại run rẩy, … Mặc dù các cơn động kinh thường không gây nguy hiểm đến tính mạng con chó, nhưng chúng cũng có thể là dấu hiệu của một vấn đề nghiêm trọng hơn.`,
                treat: `Nếu bạn nghi ngờ Shiba Inu của bạn bị co giật, bạn nên đưa chúng đến bác sĩ thú y để được chẩn đoán. Bệnh động kinh không thể điều trị dứt điểm nhưng có thể làm giảm các cơn co giật bằng thuốc. Cách phòng tránh hiệu quả là đưa chó Shiba đi khám sức khỏe thường xuyên để kiểm soát bệnh.`
            },
            {
                name: "Bệnh dị ứng",
                sym:   `Bệnh dị ứng thường gặp phải ở những chú Shiba sống ở vùng khí hậu ấm áp như Việt Nam. Bệnh xuất phát từ nhiều nguyên nhân. Có thể phát sinh từ thức ăn, sữa tắm, ô nhiễm không khí, dị ứng thuốc, côn trùng, … Thông thường, dị ứng gây ra các triệu chứng như: ngứa ngáy, nổi mẩn đỏ trên da, chân tay sưng vù, chảy nước mắt, hắt hơi, …`,
                treat: `Bệnh dị ứng không nguy hiểm nhưng rất khó để điều trị do có nhiều nguyên nhân khác nhau. Điều quan trọng là phải tìm ra nguyên nhân gây bệnh. Ví dụ do thức ăn, côn trùng, phấn hoa, … thì cần loại bỏ ngay ra khỏi môi trường sống. Các bác sĩ thú y có thể làm giảm các triệu chứng dị ứng bằng một số loại thuốc kháng sinh như: Promethazine (các biệt dược là: Phenergan, Pipolphen) liều tiêm 0,2- 0,4 mg/kg thể trọng.`
            }
            
        ]
    },
    {
        type: "Chó Phốc sóc",
	image : "https://azpet.com.vn/wp-content/uploads/2019/01/cho-phoc-soc-tuoi-tho-lau.jpg",
        char: `Chó Phốc sóc là loại chó cảnh cỡ nhỏ, kích cỡ của chúng chỉ bằng một món đồ chơi, chiều cao từ 18 - 30 cm và có trọng lượng từ 1 - 3kg. Đầu của chúng hình nêm và cân xứng với cơ thể, một số con có gương mặt như loài cáo. Đôi mắt chính hình quả hạnh, to vừa phải và có màu sẫm, trông rất sáng và lóe lên sự thông minh, lanh lợi. Phốc sóc có đôi tai nhỏ nhắn, nhọn và dựng thẳng trên đầy, hàm răng hình kéo và cái mũi be bé cùng màu với bộ lông. Đôi chúng rất xù, mềm mại và uốn cong lên lưng.
        • Tuổi thọ
        Chó Phốc sóc có tuổi thọ từ 12 đến 16 năm.`,
        tame: `Chăm sóc sức khỏe
        - Chó Phốc chịu nắng rất kém, nhiệt độ môi trường xung quanh không nên quá 30 độ C
        - Mỗi ngày bạn chỉ cần dẫn chúng ra ngoài 25 - 30 phút để cho chúng chạy nhảy, nô đùa và giải phóng năng lượng tích tụ
        - Hạn chế giữ chó Phốc ở trong nhà quá lâu
        - Chó Phốc có bộ lông dày, dài và lông xù vì vậy bạn phải chải lông và gỡ rối cho chúng mỗi ngày
        - Tắm gội ít nhất mỗi tuần 2 - 3 lần`,
        nutri: `Chế độ dinh dưỡng
        - Khẩu phần ăn của chó Phốc bao gồm: 20 - 26 % protein,
        10 - 14 % chất béo, ít hơn 10 % chất độn, còn lại là chất xơ, chất khoáng và vitamin,...
        - Khối lượng thức ăn mỗi bữa chỉ nên bằng 3 - 4 % trọng lượng cơ thể.Cho chó Phốc ăn quá no hay quá đói đều không tốt.`,
        sick: [
            {
                name: "Bệnh đục thuỷ tinh thể",
                sym:   `Đục thuỷ tinh thể: Là căn bệnh có thể gặp ở bất kỳ chú cún nào và thường mắc nhất là những giống cảnh khuyển có đôi mắt lồi như: Phốc Sóc và Poodle. Bệnh có thể xuất hiện ở mọi lứa tuổi: Từ những bé Phốc Sóc sơ sinh cho tới những chú cún trưởng thành. Có nhiều dạng đục thuỷ tinh thể ở Phốc Sóc, mỗi dạng lại có một nguyên nhân gây bệnh khác nhau: Có thể do di truyền hay cún gặp các tai nạn liên quan đến mắt.
                Các triệu chứng của bệnh bao gồm:
                • Màu mắt của Phốc Sóc bị thay đổi: Màu mắt nâu sẫm có thể bị biến đổi thành màu xanh, xám hoặc trắng.
                • Phốc Sóc bắt đầu đi lại không vững, hay vấp ngã do tầm nhìn bị mờ.
                • Con ngươi của mắt bị đục ngầu, có một lớp màng trắng bao phủ xung quanh.
                • Mắt bị đỏ bên trong và sưng xung quanh viền mắt.
                • Phốc Sóc hay dụi mắt.`,
                treat: `Nếu thấy Phốc Sóc xuất hiện bất kỳ dấu hiệu nào như trên, bạn nên đưa cún cưng đến bác sĩ thú y ngay lập tức. Bệnh chỉ có thể giải quyết bằng phương pháp phẫu thuật thay thủy tinh thể mới. Để lâu ngày, cún có thể dẫn bị mù lòa nên việc phát hiện và chữa trị sớm là rất quan trọng.`
            },
            {
                name: "Bệnh tràn dịch khí quản",
                sym: `Cấu tạo khí quản được hỗ trợ bởi các vòng nhỏ làm từ sụn. Với các giống cảnh khuyển có kích thước nhỏ như Pom, phần sụn này khá mềm và dễ bị chấn thương. Một tác động mạnh tới phần cổ cũng có thể khiến chúng nứt hoặc gãy vụn. Dây xích quá chật cũng có thể là một nguyên nhân.
                Một số dấu hiệu nhận biết bệnh như sau:
                • Ho: Đây là dấu hiệu nhận biết tình trạng ban đầu của bệnh.
                • Khó thở: Đây là dấu hiệu cho thấy tình trạng bệnh đang diễn biến ở mức độ nặng hơn.Cún có biểu hiện thở nặng nhọc, thở khò khè, âm ran thay đổi bất thường...`,
                treat: `Bạn có thể điều trị căn bệnh này bằng cách cho cún sử dụng một số loại thuốc ho, thuốc chống viêm, thuốc giãn phế quản và cả thuốc kháng sinh. Tất nhiên, các loại thuốc này không thể làm lành các vòng khí quản đã bị tổn thương, chúng chỉ là phương án để giữ tình trạng bệnh ở mức ổn định. Trường hợp nghiêm trọng sẽ phải phẫu thuật để ổn định lại khí quản. Để bảo vệ cổ họng của cún và giữ áp lực ra khỏi đường thở, Siêu Pet khuyên bạn nên sử dụng dây nịt có độ co giãn thay vì vòng cổ.`
            },
            {
                name: "Bệnh béo phì",
                sym:   `Bệnh béo phì là một vấn đề nghiêm trọng ảnh hưởng tới sức khỏe của Phốc Sóc. Bệnh không nguy hiểm đến tính mạng nhưng là nguyên nhân hàng đầu gây nên một số bệnh nguy hiểm khác như: Insulinoma – u tuyến tụy nội tiết, bệnh đái tháo đường, bệnh tim mạch,...
                Có nhiều nguyên nhân gây nên bệnh béo phì ở chó Phốc Sóc.Tuy nhiên, nguyên nhân thường thấy nhất là do sự bất hợp lý giữa lượng thức ăn nạp vào cơ thể và năng lượng sử dụng hàng ngày.Bạn đọc có thể hiểu là người nuôi cho chúng ăn nhiều hơn nhu cầu cơ thể cần.Lâu dần, năng lượng thừa tích tụ thành mỡ gây nên bệnh béo phì ở cún.`,
                treat: `Dấu hiệu nhận biết bệnh béo phì:
                • Phốc Sóc tăng cân nhanh, cân nặng vượt xa tiêu chuẩn cho phép của một chú Pom trưởng thành là 6-15kg.
                • Mỡ thừa tích lũy ở một số bộ phận trên cơ thể như: Bụng, cổ và mông.Bạn có thể dùng tay sờ hai bên xương sườn để kiểm tra mức độ béo phì.
                    Đối với Phốc Sóc bị béo phì, bạn phải tìm cách để giảm cân cho chúng: Giảm lượng thức ăn dung nạp vào hàng ngày và tăng tần suất vận động lên.
                • Chế độ dinh dưỡng lúc này cần chứa nhiều protein và chất xơ.Hạn chế tới mức tối đa lượng chất béo và tinh bột dung nạp vào cơ thể.
                • Chế độ vận động: Bạn nên dắt Phốc Sóc đi dạo 2 lần mỗi ngày thay vì 1 lần, mỗi ngày từ 30-45 phút.`
            },
            {
                name: "Bệnh viêm xương bánh chè",
                sym:   `Viêm xương bánh chè là bệnh bẩm sinh ở giống chó Phốc Sóc: Do di truyền từ chó bố mẹ, ông bà. Khi chuyển động, xương bánh chè trượt ra khỏi vị trí, lệch hẳn so với khớp xương khuỷu chân, gây đau đớn cho Phốc Sóc trong mỗi bước đi. Nếu không chuyển động, phần xương bánh chè lại trở về vị trí cũ và những cơn đau sẽ biến mất. Đó là lý do, những chú cún Phốc Sóc mắc bệnh này thường không thích vận động mà chỉ thích nằm im một chỗ.
                Một số dấu hiệu nhận biết bệnh như sau:
                • Phốc Sóc đi khập khiễng hoặc nhấc hẳn cái chân đau lên khi di chuyển.
                • Nếu gặp vấn đề này trong vài ngày, những vết sưng tấy, đỏ ửng trên chân sẽ xuất hiện.
                • Phốc Sóc kêu đau đớn trong mỗi bước đi.`,
                treat: `Cách duy nhất để điều trị bệnh là tiến hành phẫu thuật đưa khớp xương bánh chè trở về vị trí ban đầu của nó. Sau phẫu thuật, bạn phải giữ cho bé Pom không được di chuyển để ổn định lại khớp xương. Tuy nhiên, Pom là giống cảnh 
                khuyển năng động nên bạn sẽ rất khó giữ chúng một chỗ quá lâu.Siêu Pet gợi ý tới bạn một biện pháp: Dùng chuồng nhốt để hạn chế không gian chuyển động của cún.Đây là giải pháp tốt nhất cho những chú cún bị bệnh nhưng lại hoạt bát ưa vận động.
                Bệnh viêm xương bánh chè là một dạng dị tật bẩm sinh không có cách nào phòng tránh chúng ngoài việc chọn giống thật tốt.Con bố mẹ ông bà khỏe mạnh thì tỷ lệ cún con ra đời mắc bệnh này cực kỳ thấp.`
            },
            {
                name: "Bệnh hạ đường huyết",
                sym:   `Hạ đường huyết là vấn đề sức khỏe phổ biến ở những giống chó nhỏ như: Phốc Sóc, Poodle hay Lạp Xưởng. Bệnh là một loại rối loạn chuyển hóa. Nếu không biết cách cấp cứu kịp thời có thể nguy hiểm đến tính mạng của cún cưng.
                Một số dấu hiệu để nhận biết bệnh hạ đường huyết như sau: Chân tay của cún run rẩy, co giật, mắt đảo liên tục, toàn thân mềm nhũn.Trường hợp không được sơ cứu kịp thời, Phốc Sóc sẽ bất tỉnh và có thể tử vong.`,
                treat: `Điều đầu tiên bạn cần làm nếu thấy Phốc Sóc có dấu hiệu hạ đường huyết là cho chúng ăn ngay một thứ gì đó có đường (ví dụ như: Mật ong, siro, mứt, kẹo). Nếu chú cún nhà bạn đã mất ý thức, hãy chà một ít mật ong quanh miệng và trên nướu của chúng. Sau đó, lập tức đưa đến bác sĩ thú y để điều trị kịp thời.
                Để ngăn ngừa bệnh hạ đường huyết xảy ra, bạn cần cho bé Phốc Sóc ăn nhiều bữa trong một ngày: Thành 4-5 bữa nhỏ thay vì chỉ có 2 bữa lớn một ngày.
                Phương pháp phòng tránh bệnh ở chó Phốc Sóc
                Kiểm tra sức khỏe chó Phốc Sóc mỗi ngày
                Để giúp cún khỏe mạnh, người nuôi cần thường xuyên kiểm tra sức khỏe cho cún.Đây là biện pháp tốt nhất để phát hiện và phòng tránh mầm mống bệnh ở Phốc Sóc.Dưới đây là một số điều bạn có thể thực hiện để xác định tình trạng sức khỏe của Phốc Sóc mỗi ngày như sau:
                Nhiệt độ
                Theo Siêu Pet, bất kỳ chủ sở hữu nào cũng nên có thói quen kiểm tra nhiệt độ cho Phốc Sóc mỗi ngày.Với rất nhiều căn bệnh, nhiệt độ cơ thể tăng đột ngột sẽ là triệu chứng đầu tiên để nhận biết .Nhiệt độ bình thường của chó là từ 38°C đến 39,
                2°C(khoảng 100°F đến 102,
                5°F).Cao hơn mức này tức là bé Phốc Sóc nhà bạn đang bắt đầu có triệu chứng sốt.
                Mắt
                Đôi mắt sáng là dấu hiệu cho một sức khỏe tốt và ngược lại.Bạn hãy thường xuyên kiểm tra xem Phốc Sóc có dấu hiệu chảy gỉ ở mắt, mắt đỏ ngầu, tinh thể bị đục, mí mắt sụp, … hay không? Bất kỳ dấu hiệu nào ở mắt cũng cho thấy bé Phốc Sóc nhà bạn đang gặp vấn đề.
                Mũi
                Bạn nên lưu ý kiểm tra mũi cho Phốc Sóc hàng ngày xem có tiết dịch tiết bất thường không? Nếu dịch mũi có màu khác lạ so với màu trắng trong bình thường thì bé Phốc Sóc đang gặp những vấn đề về hệ hô hấp như: Viêm phế quản, bệnh ho cũi, …
                Thông thường, một chú chó khỏe mạnh thì mũi sẽ hơi ướt một chút, chất nhầy trắng và trong.Nếu mũi quá khô và bong tróc vẩy có thể là dấu hiệu cho thấy tình trạng sức khỏe ở Phốc Sóc không ổn định.Nghiêm trọng hơn là xuất hiện những vết nứt sâu hoặc bất kỳ vết nứt nào có chất lỏng(mủ, máu).Nếu thấy dấu hiệu trên, người nuôi cần dẫn chúng đến thăm khám ngay lập tức để được điều trị kịp thời.
                Hít thở
                Tốc độ thở có thể là một dấu hiệu nhận biết tình trạng sức khỏe của Phốc Sóc: Hơi thở dốc, nặng nhọc, nhịp thở không đều cũng có thể là dấu hiệu của bệnh tật.
                Cung cấp một lối sống khoa học
                Để Phốc Sóc khỏe mạnh và ngăn ngừa được bệnh tật, bạn nên chọn cho Pom một lối sống khoa học.
                Về thức ăn:
                • Người nuôi nên chọn những loại thực phẩm chất lượng, có giá trị dinh dưỡng cao.
                • Hạn chế cho cún ăn quá nhiều thức ăn khô bán sẵn.
                • Tránh xa các chất phụ gia hóa học, phẩm màu thực phẩm.Chúng là nguyên nhân hàng đầu gây nên một số bệnh nguy hiểm như: Viêm gan, rối loạn tiêu hóa, kích ứng da, …
                Về chế độ vận động: Bạn nên cho Phốc Sóc tập thể dục mỗi ngày.Các bài tập nên được thực hiện ngoài trời, trong một không gian rộng lớn.Nếu muốn bé Pom có một sức khỏe tốt, bạn nên dẫn chúng đi dạo 2 lần / ngày vào sáng và tối, mỗi lần từ 20-30 phút.
                Thăm khám bác sĩ thú y thường xuyên
                Thăm khám thường xuyên là cách duy nhất để bạn biết bé Phốc Sóc nhà mình có thực sự khỏe mạnh hay không.Bạn nên đưa chúng đến bác sĩ thú y ít nhất 2 lần / năm để tiến hành kiểm tra tổng quát nhằm rà soát bệnh.Nếu bạn nghi ngờ bé Pom gặp vấn đề gì, hãy gọi cho bác sĩ thú y ngay để nhờ tư vấn.Tránh trường hợp để bệnh trở nặng dẫn đến khó khăn trong việc điều trị.
                Tiêm phòng đầy đủ, đúng liệu trình
                Bất kỳ chú Phốc Sóc nào cũng bắt buộc phải thực hiện đúng liệu trình tiêm phòng nếu muốn có một cuộc sống khỏe mạnh sau này.Việc tiêm phòng vaccine sẽ được bắt đầu khi chúng đủ 2 tuần tuổi và kéo dài cho tới 6 tháng tuổi.Một số căn bệnh truyền nhiễm gây tử vong cao cần tiêm phòng để tránh như: Care, parvo, dại, viêm gan, leppo, …
                Bạn nên đưa bé Phốc Sóc đến đăng ký và thực hiện theo đúng liệu trình tại các bệnh viện thú y.Người nuôi nên nhớ là cún trên 6 tháng tuổi mới bắt đầu tiêm phòng thì hiệu quả phòng bệnh của vaccine gần như không có tác dụng.`
            }
            
        ]
    },
    {
        type: "Chó Golden",
	image : "https://petmaster.vn/petroom/wp-content/uploads/2020/06/avaa-11.jpg",
        char: `Chó Golden là giống chó đẹp và là giống chó rất thông minh. Giống chó thông minh này có hai màu lông đặc biệt đó là màu vàng sẫm và màu vàng nhạt. Ngoài 2 màu đặc trưng trên chúng còn có màu hung đỏ. Tuy nhiên, theo tiêu chuẩn quốc tế về giống chó Golden, màu hung đỏ không được công nhận với giống chó này.
        Hình dáng của chó Golden đầu to, trán hơi phẳng với bộ xương hàm chắc khỏe.Mõm hơi vát và có một chiếc mũi màu đen.Nếu mũi chó khác màu sẽ không được công nhận theo đúng tiêu chuẩn của giống chó Golden.Mắt chúng có màu xanh nâu, xung quanh mắt có viền vàng.Tai chúng cụp, cổ dài và khá cơ bắp
        • Tuổi thọ
        Tuổi thọ trung bình của Chó Golden từ 10 - 12 năm.Cùng tuổi thọ với những giống chó cảnh bình thường khác.`,
        tame: `Chăm sóc sức khỏe
        - Golden là giống chó lao động, chúng ăn nhiều và cần phải giải tỏa thường xuyên.Vì vậy chúng vần vận động 15 - 30 phút mỗi ngày
        - Nên chải chuốt lông hằng ngày còn nếu bận thì 2 - 3 ngày làm 1 lần
        - Tắm gội 1 - 2 lần mỗi tuần`,
        nutri: `Chế độ dinh dưỡng
        - Khẩu phần ăn hằng ngày của Golden chủ yếu là thịt bò, thịt lợn, thịt gà, cá,...Ăn thêm cả trứng vịt lộn để bổ sung canxi.Bổ sung thêm rau xanh, vitamin và khoáng chất. 
        - Khối lượng thức ăn hàng ngày của một bé Golden là từ 1.8 - 3.5 % tổng trọng lượng cơ thể.Chẳng hạn một chú chó 10kg sẽ cần khoảng 280g - 350g thức ăn. 
        - Golden 2 - 3 tháng tuổi nên ăn 4 bữa / ngày; từ 3 - 5 tháng tuổi nên ăn 3 bữa / ngày; từ 6 tháng trở đi chỉ cần ăn 2 bữa / ngày`,
        sick: [
            {
                name: "Bệnh ghẻ ngoài da",
                sym:   `Ghẻ ngoài da là căn bệnh hay gặp ở những giống cảnh khuyển lông dài như Golden Retriever. Bệnh tuy không nguy hiểm đến tính mạng nhưng gây mất thẩm mỹ nghiêm trọng, ảnh hưởng đến sức khỏe bé cún. Nếu không chữa trị kịp thời có thể gây ra một số biến chứng nguy hiểm như: Viêm gan, nhiễm trùng da, gầy gò, ốm yếu,…
                Bệnh ghẻ ngoài da được chia thành hai loại là: Cái ghẻ và Ghẻ Demodex.Trong đó, ghẻ Demodex nguy hiểm và khó chữa hơn rất nhiều.
                Nguyên nhân gây bệnh
                Bệnh ghẻ ngoài da thường do ký sinh trùng sống trên lông, da và tai gây nên.Mỗi loại ghẻ sẽ có những nguyên nhân khác nhau, cụ thể như sau:
                Cái ghẻ
                Cái ghẻ có tên tiếng anh là Sarcoptes Scabiei.Virus ghẻ Sarcoptes ký sinh trên da của Golden, chúng đào hang và đẻ trứng bên trong da, gây ngứa ngáy khó chịu.Loại ghẻ này không quá nguy hiểm, nếu chữa trị đúng cách Golden có thể khỏi hoàn toàn mà không để lại di chứng gì.Bệnh để lâu có thể gây chảy mủ trên da, nhiễm trùng da, hoại tử, …
                Bệnh ghẻ Sarcoptes có thể lây từ cún sang người nếu tiếp xúc da thịt trực tiếp.Virus Sarcoptic lây truyền sang da người và gây nên những nốt sưng đỏ tấy, cực kỳ ngứa, sau một vài ngày bôi thuốc có thể tự khỏi.Nhiều người hay nhầm lẫn với vết muỗi đốt và bỏ qua.
                Ghẻ Demodex(mò bao lông)
                Ghẻ Demodex gây nên bởi virus ghẻ Demodex Canis ký sinh trên da.Loại virus này đào tổ và trú ẩn sâu trong da nên rất khó chữa tận gốc.Chúng hút chất dinh dưỡng khiến Golden ngày càng gầy gò, ốm yếu.Những bé Golden mắc bệnh ghẻ Demodex thường bốc mùi hôi rất khó chịu, các mảng lông rụng dần và trụi hoàn toàn nếu không được chữa trị kịp thời.
                Bệnh ghẻ Demodex không lây từ cún sang người.
                Dấu hiệu nhận biết bệnh
                Những vị trí trên cơ thể của Golden hay bị ghẻ nhất thường là: Khuỷu chân, bụng, kẽ sau tai, gần hậu môn, xung quanh mắt, sống mũi… Đa phần là ở những vùng da mỏng.Siêu Pet xin gửi đến bạn đọc một số dấu hiệu nhận biết bệnh ghẻ ngoài da ở cảnh khuyển Golden:

                Dấu hiệu nhận biết bệnh
            • Ngứa: Đây là biểu hiện dễ dàng nhận biết nhất.Những chú cún Golden sẽ dùng chân gãi người liên tục hoặc cọ, chà xát cơ thể xuống mặt đất để giảm ngứa, cún ngứa trong nhiều ngày không có dấu hiệu khỏi.
            • Rụng lông: Lông của Golden rụng thành từng mảng lớn để lộ rõ lớp da bên trong.Đây là biểu hiện cho thấy bệnh ghẻ đã lây lan khá nghiêm trọng.
            • Vảy gàu: Sau thời điểm rụng lông, trên da cún bắt đầu xuất hiện nhiều vảy gàu, đóng thành mảng.Ban đầu ướt và chảy mủ, sau dần khô lại và bong tróc.
            • Mụn đỏ ghẻ: Mụn đỏ nhỏ li ti mọc xung quanh cơ thể, tập trung nhiều ở những vùng da lông rụng.Nếu không tinh ý có thể nhầm lẫn với dấu hiệu của bệnh sài sốt Care.
            • Da lở loét: Bệnh ghẻ tiến triển nặng có thể dẫn đến hiện tượng da bị lở loét, chảy mủ, viêm nhiễm nghiêm trọng, thậm chí bị thối rữa.
            • Cơ thể có mùi: Lông bốc mùi hôi là dấu hiệu cho thấy bé Golden nhà bạn có khả năng đang mắc bệnh ghẻ ngoài da.Cơ thể cún bốc mùi dù vẫn tắm rửa thường xuyên, mùi hôi thường nồng và rất khó chịu.`,
                treat: `Nếu có điều kiện, bạn nên đưa Golden đến các phòng khám thú y để bác sĩ thăm khám và điều trị bệnh cho hiệu quả. Hoặc nếu không, bạn có thể tham khảo một số cách tự chữa tại nhà của Siêu Pet như sau:
                Cách 1: Dùng thuốc
                Sử dụng thuốc xịt ghẻ Alkin Mitecyn vào những vùng da viêm nhiễm.Xịt mỗi ngày 1-2 lần, mỗi lần cách nhau 12 tiếng.Khi đi mua thuốc, bạn nên hỏi người bán về liều lượng sử dụng sao cho phù hợp với cân nặng của bé Golden.Sử dụng thuốc xịt Alkin Mitecyn thì cún sẽ khỏi 100% từ sau 5-7 ngày.
                Thuốc dạng xịt thẩm thấu vào da, tiêu diệt các loại ve chó, bọ chét, ký sinh trùng gây ra bệnh ghẻ.Trước khi xịt, bạn nên tắm rửa sạch sẽ cho Golden và không tắm trong vòng 24h sau khi xịt thuốc.Thuốc xịt ghẻ Alkin chỉ dùng cho cún trên 12 tuần tuổi.
                Tuy nhiên, do xịt trực tiếp vào da nên thuốc Alkin Mitecyn khá độc hại.Một số bé Golden sau khi xịt từ 30-60 phút có thể xuất hiện tình trạng bỏ ăn, cơ thể ốm yếu, thậm chí nôn mửa.Nhưng thường 1-2 ngày là chúng sẽ tự khỏi.Không dùng thuốc khi sức khỏe Golden đang trong tình trạng không ổn định và tuyệt đối không xịt vào phần mặt hay mõm của cún.
                Cách 2: Dùng các biện pháp dân gian
                Do các loại thuốc xịt hay thuốc dạng tiêm thường gây hại cho sức khỏe Golden nên một số chủ nuôi thường dùng các biện pháp dân gian để trị ghẻ.Các cách này chữa ghẻ rất mất thời gian nhưng tuyệt đối an toàn.
            • Tinh dầu lá bạc hà: Lá bạc hà có tính sát khuẩn cao, lành tính và mát cho da.Bạn sử dụng tinh dầu của lá bạc hà bôi lên những khu vực bị ghẻ.Bôi ít nhất 3 lần / ngày, sau từ 3-4 tuần các mảng da bị tổn thương sẽ dần hồi phục.
            • Lá đào: Vị chát của lá đào có tính sát khuẩn cao: Bạn chỉ cần đun lá đào với một chút muối trắng, dùng nước đó tắm cho Golden bị ghẻ hoặc dã nhỏ lá đào đắp lên những vùng da bị ghẻ.Thực hiện liên tục mỗi ngày trong 3-4 tuần, bệnh ghẻ sẽ giảm dần.
            • Một số loại lá dân gian khác như: Lá chè tươi, lá đinh lăng, củ riềng, lá xà cừ cũng có tác dụng chữa ghẻ rất tốt dù rất mất thời gian.
                Cách phòng tránh
            • Vệ sinh nơi ở của Golden thường xuyên bằng dung dịch Cloramin B 0.5%, nước vôi.
            • Tắm rửa thường xuyên cho các bé Golden bằng các loại sữa tắm dành riêng cho cún, tránh tắm cho cún bằng những loại sữa tắm ở người.Vệ sinh sạch sẽ các ngóc ngách cơ thể trong quá trình tắm.
            • Tránh để lông của Golden ẩm ướt lâu ngày có thể bốc mùi hôi khó chịu và là môi trường lý tưởng cho các loại vi khuẩn, ký sinh trùng sinh sôi.
            • Tránh cho Golden tiếp xúc với những chú cún bị bệnh ghẻ.
            • Tránh cho chúng chơi ở những nơi ẩm ướt, bẩn, mất vệ sinh.
            • Bệnh ghẻ không liên quan gì đến thức ăn nên bạn không cần cho Golden kiêng bất kỳ loại nào.
                Bệnh viêm phổi thường hay xuất hiện ở những bé Golden từ 6-12 tuần tuổi.Bệnh thường là kế phát của viêm phế quản hoặc di chứng từ các bệnh truyền nhiễm khác như: Care, Parvo, dại, … Bệnh nếu phát hiện và chữa trị kịp thời sẽ không quá nguy hiểm.Nhưng nếu để nặng thì 80-90 % Golden sẽ tử vong do ngạt thở.Viêm phổi ở Golden có thời gian ủ bệnh dài nên rất ít chủ nuôi phát hiện sớm và điều trị kịp thời.`
            },
            {
                name: "Bệnh viêm phổi",
                sym: `Nguyên nhân phổ biến là do cún nhiễm phải một số loại virus đường hô hấp và các loại vi khuẩn kế nhiễm như: Pneumococcus, Streptococcus, Klebsiella, Bordesella,… Lúc đầu, các loại virus này xâm nhập qua đường hô hấp gây viêm phế quản nhẹ. Sau lan dần đến các nhu mô phổi làm cho tổ chức phổi yếu đi. Trên cơ sở đó, các loại vi khuẩn, nấm có sẵn ở đường hô hấp sẽ phát triển và gây bệnh viêm phổi, nặng hơn gây hoại tử hoặc sinh mủ trong hệ thống phổi.
                • Do các loại ấu trùng ký sinh trên phế quản như: Filaroides, Actu Strongylus, Paragonimus sinh sôi và nảy nở trong niêm mạc đường hô hấp.
                • Một số loại nấm như: Aspergillus, Histoplasma cũng có khả năng gây ra bệnh viêm phổi ở Golden.
                    Dấu hiệu nhận biết
                • Thời gian đầu nhiễm bệnh, các bé Golden thường xuất hiện tình trạng mệt mỏi, uể oải, bỏ ăn, sốt cao, niêm mạc đỏ do phế quản đang bị tổn thương.
                • Thời gian sau, cún xuất hiện những cơn ho khan, ngày càng nặng.Cơn ho thường xuất hiện nhiều vào ban đêm và sáng sớm.
                • Giai đoạn bệnh nặng, Golden xuất hiện dấu hiệu khó thở, nằm một chỗ, yếu, cố thở nhanh và nông, thiếu oxy trong máu dẫn đến tím tái, sốt cao trên 39 độ C, miệng đỏ sẫm, co giật, … Nếu không điều trị kịp thời, Golden sẽ chết sau vài ngày kể từ khi phát bệnh.`,
                treat: `Khi phát hiện cún cưng bị bệnh, Siêu Pet khuyên bạn nên đưa chúng đến ngay đến bác sĩ thú y để chữa trị kịp thời. Bệnh viêm phổi ở Golden khá nguy hiểm, bạn không nên tự ý chữa trị ở nhà có thể gây biến chứng. Một số loại thuốc đặc trị bệnh viêm phổi hay được bác sĩ thú y dùng phổ biến như sau:
                Sử dụng một trong các loại kháng sinh sau đây:
        • Kanamycin: Tiêm bắp liều 40mg / kg thể trọng/ ngày, chia 2 - 3 lần trong ngày.
        • Penicillin G: Dùng theo đường tiêm với liều 500.000 UI chia 2 - 3 lần tiêm trong ngày.
        • Streptomycin: Dùng theo đường uống 1g / ngày, chia 2 - 3 lần trong ngày.Kết hợp giữa Penicillin với streptomycin nếu tình trạng viêm phổi nặng.
        • Erythromycin: Tiêm bắp thịt, liều 20 - 25 mg / kg thể trọng / ngày.Erythromycin là kháng sinh liều nặng nên sau khi tiêm, Golden có thể xuất hiện triệu chứng như nôn mửa, rối loạn tiêu hóa, nhưng sau ít ngày sẽ hết.
                Các loại thuốc hỗ trợ khác như:
        • Ephedrin tiêm bắp 1 - 2 ống x 1ml / ngày.Ngày tiêm 1 - 2 lần có tác dụng giảm ho dễ thở.
        • Dimedron tiêm bắp 0,
            5 - 1 ống x 1ml / ngày có tác dụng giảm sốt, giảm đau
        • Các loại thuốc bổ hỗ trợ quá trình phục hồi bệnh như: Ringerlactat liều 100 - 150 ml / kg thể trọng / ngày theo đường truyền.Vitamin B1 2,
            5 %, Vitamin C 5 %, Glucoza 30 % dùng theo đường uống, ngày 2 lần, khoảng 3 - 5ml một lần uống.
                Lưu ý: Bạn không nên tự ý dùng thuốc.Liều lượng thuốc phải theo đơn của bác sĩ sao cho phù hợp với cân nặng và độ tuổi của từng bé Golden.
                Cách phòng tránh bệnh
                Bệnh viêm phổi ở Golden khá phổ biến.Trung bình cứ 10 bé trong độ tuổi từ 6 - 12 tuần tuổi thì có 4 - 5 bé bị.Bệnh không có cách phòng tránh cụ thể mà chỉ có thể giảm thiểu khả năng mắc bệnh cho cún bằng một số biện pháp sau:
        • Giữ vệ sinh nơi ở và môi trường trường xung quanh Golden luôn sạch sẽ và khô ráo, nhất là vào mùa mưa.Vị trí đặt chuồng nên ở nơi thoáng mát vào mùa hè và ấm áp vào mùa đông.Nơi đi vệ sinh của Golden nên cách xa nơi ăn uống, ngủ nghỉ.Phân, nước tiểu của cún nên được dọn hàng ngày.
        • Khử trùng nơi ở của Golden và khu vực xung quanh bằng các loại dung dịch Cloramin B 0,
        5 % trong 10 phút, Cresyl 1 - 2 %, hoặc nước vôi 10 % định kỳ mỗi tuần một lần.Bạn cũng có thể dùng ND.Iodine(thành phần gồm PVP Iodine, Kalium iodine) để sát trùng tiêu độc chuồng nuôi và môi trường xung quanh.
        • Chế độ dinh dưỡng và cách chăm sóc Golden cần khoa học để chúng luôn khỏe mạnh.Tăng cường sức đề kháng cho cún từ thực phẩm và chế độ vận động để phòng tránh một số loại virus nguy hiểm.
        • Đưa Golden đi tiêm phòng định kỳ các loại vaccine phòng một số bệnh nguy hiểm như: Care, Parvovirut, dại, viêm gan truyền nhiễm, Lepto, …`
            },
            {
                name: "Bệnh tiêu chảy",
                sym:   `Nguyên nhân gây bệnh
                Bệnh tiêu chảy có thể gặp ở bất kỳ giống cảnh khuyển nào với mọi độ tuổi.Đây là bệnh phổ biến ở Golden, đặc biệt là cún nhỏ dưới 6 tháng tuổi khi hệ tiêu hóa của chúng chưa ổn định.
                Một số nguyên nhân gây bệnh được xác định như sau:
                • Do thức ăn: Các loại thức ăn ôi thiu, mốc hỏng, hết hạn sử dụng, nhiều dầu mỡ, … Các loại thực phẩm tươi sống, đồ ăn sẵn, thức ăn đóng hộp cũng rất nguy hiểm cho hệ tiêu hóa của Golden.
                • Do một số bệnh liên quan đến đường ruột: Khi Golden mắc một số bệnh như: Viêm đường ruột, xoắn dạ dày, care, parvo, lepo, … cũng thường xuất hiện triệu chứng tiêu chảy.Việc chữa trị lúc này sẽ gặp khó khăn hơn rất nhiều.
                • Do ngộ độc cấp tính: Golden bị dị ứng hoặc ăn phải các loại động, thực vật có độc gây nên hiện tượng tiêu chảy kèm theo nôn mửa.
                • Một số nguyên nhân khác cũng có thể khiến Golden bị tiêu chảy như: Stress, thức ăn thay đổi đột ngột, uống nước bẩn, ăn rác thải, túi ni lông, …
                Dấu hiệu nhận biết
                Bệnh tiêu chảy được xác định khi Golden đi ngoài nhiều hơn 3 lần / ngày.Khi đi vệ sinh thì phân lỏng, màu đen, có mùi tanh và có máu nhầy.Bệnh nặng sẽ xuất hiện tình trạng nôn mửa, sốt cao, nằm ì một chỗ, bỏ ăn nhiều bữa.Nếu không chữa trị kịp thời, Golden có thể chết sau 1 tuần vì mất nước.`,
                treat: `Bạn cần xác định rõ nguyên nhân gây bệnh thì mới có thể đưa ra phương pháp điều trị bệnh hiệu quả cho cún cưng. Nếu chỉ là tiêu chảy bình thường, bạn có thể tự chữa trị tại nhà. Còn nếu do các loại bệnh nguy hiểm như: Viêm đường ruột, xoắn dạ dày, cave, parvo,… thì bạn nên đưa bé Golden đến bác sĩ thú y ngay lập tức.
                Đối với Golden bị tiêu chảy thông thường
                • Bạn nên ngừng cho cún ăn ngay lập tức khi phát hiện bệnh.Để dạ dày và ruột của Golden rỗng trong vòng 12 - 24h.
                • Uống Primperan từ 1 / 2 đến 1 viên / lần,
                    3 lần / ngày, mỗi lần cách nhau 6 tiếng.
                • Loperamid hydroclorid 2mg / 15kg / lần, ngày uống 3 lần có tác dụng giảm tình trạng tiêu chảy.
                • Bù nước và điện giải bằng dung dịch truyền Ringer lactate 30 - 50ml / kgP / ngày, truyền chậm tĩnh mạch(35 - 40 giọt / phút) hoặc dùng oresol hòa nước cho uống kết hợp thêm Vitamin C.
                • Bổ sung thêm glucose 5 % hoặc 10 % hoặc 30 % để cún nhanh hồi phục.
                Đối với Golden bị tiêu chảy do mắc bệnh truyền nhiễm
                Một số biểu hiện để chuẩn đoán Golden bị tiêu chảy do mắc bệnh truyền nhiễm như sau: Phân đen, có máu nhầy, mùi tanh hôi khó chịu, tiêu chảy kết hợp với nôn mửa, sốt cao, khó thở.Nếu muốn biết chính xác hơn, Siêu Pet khuyên bạn nên dẫn cún cưng đến các bệnh viện thú y để xét nghiệm.
                Các bệnh truyền nhiễm(do virus care, parvo, lepo, viêm gan, …) thì không có thuốc đặc trị hiệu quả.Tuy nhiên, bạn có thể dùng một số loại kháng sinh để kiểm soát việc tiêu chảy, phòng nhiễm trùng kế phát trước khi tiến hành điều trị tận gốc bệnh.
                Cách phòng tránh bệnh
                • Thức ăn cho Golden nên được nấu chín, đổ thức ăn thừa sau mỗi bữa.Các đồ tanh sống, nội tạng, xương ống, … không nên cho Golden dưới 4 tháng tuổi ăn.Không nên thay đổi thức ăn đột ngột.
                • Giữ vệ sinh sạch sẽ môi trường sống xung quanh của Golden.Khử trùng định kỳ mỗi tuần một lần bằng dung dịch nước vôi 10 %.
                • Tẩy giun sán định kỳ mỗi tháng một lần để phòng tránh những bệnh liên quan đến đường ruột do các loại giun móc.
                • Tiêm phòng đầy đủ là cách duy nhất để phòng tránh những bệnh truyền nhiễm ở cảnh khuyển Golden.Bạn nên thực hiện liệu trình tiêm ngay từ khi cún được 2 tuần tuổi.`
            }
            
        ]
    },
    {
        type: "Chó Samoyed",
	image : "https://sieupet.com/sites/default/files/samoy4_0.jpg",
        char: `Chó Đực thường có chiều cao khoảng 53 đến 60 cm, có cân nặng từ 20 đến 30 kg. Chó cái có chiều cao khoảng 48 đến 53 cm, cân nặng giao động từ 16 đến 20 kg. Chú chó Samoyed nổi bật với bộ lông dày và trắng muốt như tuyết. Ngoài màu trắng tuyết ra thì Samoyed còn sở hữu những màu lông khác như vàng kem, vàng bánh quy,...
        Samoyed có thể hình thon gọn và cấu trúc vững chắc, rất khỏe mạnh và dẻo dai.Chúng sở hữu những cái đầu khỏe, mõm chó nhọn và thường có màu đen hoặc màu nâu.Chúng có dáng đi thẳng, luôn ngẩng cao đầu,
        2 tai vểnh lên và hướng về phía trước.Tai chú hình tam giác và hơi tù ở phần đỉnh tai, xung quanh tai lông mọc rất tốt và tương đôi mềm mượt.Chúng có đôi chân thẳng, gân guốc.
        • Tuổi thọ
        Chó Samoyed có tuổi đời trung bình trong khoảng từ 12 đến 15 năm`,
        tame: `Chăm sóc sức khỏe
        - Lông của Samoyed bị rụng khá nhiều và hay bị rụng theo mùa, hãy tắm bằng các loại dầu tắm chuyên dụng để hạn chế bị rụng lông
        - Samoyed có xu hướng tự giữ sạch sẽ nên bạn không cần tắm quá nhiều cho chúng, tầm 1 - 2 lần mỗi tháng là đủ.
        - Cần đánh răng cho Samoyed ít nhất 2 lần / tuần để ngăn các bệnh về răng miệng và hơi thở có mùi.`,
        nutri: `Chế độ dinh dưỡng
        - Chế độ dinh dưỡng của samoyed cần giàu đạm động vật: thịt bò, thịt gà, cá, thịt lợn hoặc nội tạng động vật
        - Các loại thức ăn cung cấp vitamin và khoáng chất: rau, củ, quả
        - Canxi: trứng gà, trứng vịt lộn, sữa, phô mai`,
        sick: [
            {
                name: "Tăng nhãn áp",
                sym:   `Để xác định cún yêu bị tăng nhãn áp người ta đo bằng áp suất tăng lên trong mắt. Bệnh có 3 dạng: tiểu học, di truyền và trung gian, là do chất lỏng giảm trong mắt do các bệnh về mắt khác. Triệu chứng bao gồm mất thị lực và đau. `,
                treat: `Việc khám, điều trị và tiên lượng thuốc khác nhau tùy thuộc vào loại bệnh nặng hay nhẹ. Glaucoma được điều trị bằng phẫu thuật hoặc với thuốc nhỏ mắt.`
            },
            {
                name: "Viêm võng mạc",
                sym: `Viêm võng mạc (Progressive Retinal Atrophy – PRA). Đây là một trong những bệnh về mắt bao gồm sự suy giảm dần dần của võng mạc. Nếu bệnh xuất hiện sớm, chó của chúng ta sẽ bị mù đêm. Khi bệnh chuyển nặng sẽ có triệu chứng không nhìn rõ vào ban ngày.  Chúng ta có thể sẽ không phát hiện chó bị mắc bệnh. Nhiều con chó sau khi bị ảnh hưởng thích ứng tốt với tầm nhìn bị hạn chế của chúng`,
                treat: `bạn nên cho chó đi khám định kỳ để dễ dàng phát hiện bệnh.`
            },
            {
                name: "Chứng loạn sản cơ hoành",
                sym:   `Đây là một loại bệnh di truyền, biểu hiện là xương chậu không vừa vặn vào khớp hông. Một số con chó thể hiện sự đau đớn và mệt mỏi ở một hoặc cả hai chân sau. Một số khác lại không hiển thị dấu hiệu khó chịu bên ngoài. (X-quang chiếu là cách nhất định để chẩn đoán vấn đề)`,
                treat: `Không nên nuôi chó có chứng rối loạn cơ hoành. Vì vậy nếu bạn mua một con chó con, hãy yêu cầu kiểm tra thật kỹ đời cha mẹ và sức khỏe của chó con.`
            },
            {
                name: "Bệnh Ghilomerulopathic",
                sym:   `Đây cũng là 1 loại bệnh di truyền di truyền Samoyed thuộc về 1 bộ phận rất quan trọng: THẬN. Tình trạng này nghiêm trọng hơn ở chó đực. Chó bị mắc chứng này vẫn khỏe mạnh trong 3 tháng đầu. Sau đó phát tác và tử vong vào khoảng 15 tháng tuổi. Chó cái thì xuất hiện triệu chứng sớm hơn, khoảng 2 tháng đầu. Đến nay, không có thử nghiệm sàng lọc di truyền nào có sẵn cho bệnh thận di truyền Samoyed, nhưng nghiên cứu đang được tiến hành để chữa dứt điểm bệnh.`,
                treat: ``
            },
            {
                name: "Bệnh tiểu đường (DM)",
                sym:   `Bệnh tiểu đường (DM): DM là một rối loạn, trong đó cơ thể không thể điều chỉnh lượng đường trong máu. Một con chó bệnh tiểu đường sẽ biểu hiện sự thèm ăn lành mạnh, nhưng sẽ giảm cân vì thức ăn không được sử dụng có hiệu quả. Các triệu chứng của bệnh tiểu đường là đi tiểu nhiều và khát, tăng thèm ăn, và giảm cân`,
                treat: `Bệnh tiểu đường có thể được kiểm soát bằng chế độ ăn kiêng và dùng insulin`
            }
            
        ]
    },
    {
        type: "Chó Bull Anh",
	image : "https://www.thukieng.com/wp-content/uploads/2018/09/Giong-cho-bulldog-anh-2.jpg",
        char: `Những chú chó Bull Anh sở hữu ngoại hình rất oai vệ có phần mập mạp. Cơ bắp chúng rất phát triển, chân ngắn và gân guốc. Chúng có phần đầu to, tròn và rộng, da mặt và trán chảy xệ xuống tạo thành nhiều lớp. Mũi chúng ngắn, hếch lên và có màu đen. Đặc biệt chúng có bộ lông ngắn mềm mại mà ai cũng muốn sờ vào. 
        Chiều cao của Bull Anh dao động từ 31 - 40 cm và cân nặng từ 24 - 25 kg với chó đực,
        22 - 23 kg với chó cái.
        Chó Bull Anh là loài chó cảnh chỉ thích ăn, nằm và ngủ.Thậm chí chúng có thể nằm 1 chỗ cả ngày và chẳng hề thích ra ngoài vận động như nhiều loài chó cảnh khác.
        • Tuổi thọ
        Chó Bull Anh có tuổi thọ khoảng 8 đến 12 năm khi được nuôi trong môi trường tốt và có sức khỏe tốt.`,
        tame: `Chăm sóc sức khỏe
        - Luôn giữ các nếp nhăn ở mặt và ở người chúng thật sạch sẽ để tránh các nếp gấp ở da
        - Thường xuyên cho chúng vận động và chơi các trò chơi vui nhộn`,
        nutri: `Chế độ dinh dưỡng
        - Chúng là loài ăn thịt nên dễ hấp thụ protein.Bạn có thể cho chúng ăn thịt gà, thịt lợn nhưng ít mỡ, thỉnh thoảng cho ăn thêm trứng vịt lộn và kết hợp với rau củ như bí ngô, cà rốt, bắp cải,...
        - Chúng sẽ không thích ăn đồ tanh và nội tạng động vật`,
        sick: [
            {
                name: "Bệnh về tiêu hóa",
                sym:   `Bulldog có hệ tiêu hóa rất tốt nên chúng hay đói. Nếu Bulldog bị tiêu chảy và bỏ ăn suốt 12 tiếng đồng hồ, bạn cần nhanh chóng đưa chúng đến phòng khám thú y.`,
                treat: `bạn cần nhanh chóng đưa chúng đến phòng khám thú y.`
            },
            {
                name: "Các bệnh về hô hấp",
                sym: `Bull Anh rất nhạy cảm với nhiệt độ cao khi trời nóng và nhiệt độ thấp, vì thế nhiệt độ mát mẻ là thích hợp nhất cho chúng. Mắt Bulldog tương đối kém và dễ bị hoa mắt khi ở trong môi trường có nhiệt độ cao. Có thể mắc các bệnh về hô hấp, nhiễm trùng da và các vấn đề về hông, đầu gối.`,
                treat: `Cần đưa đến cơ sở thú y gần nhất`
            },
            {
                name: "Vấn đề sinh sản",
                sym:   `Bulldog cái có thể vào mùa sinh sản đầu tiên ở độ tuổi từ 6 tháng đến 1 năm. Một chú chó cái đến 12 tháng tuổi vẫn là chó con vì nó còn trong giai đọan lớn và chưa phát triển hết cơ thể. Tuổi đề nghị phối giống cho Bulldog cái lần đầu tiên là trên 12 tháng đến 18 tháng. Khi tiến hành phối giống, Bulldog cái cần ở trạng thái sức khỏe tốt, tiêm phòng đầy đủ và được tẩy giun. Chúng không được quá mập, chỉ nên dao động từ 20- 25kg. Vì khi trọng lượng quá cao, chúng sẽ rất hiếm đậu thai và sinh được nhiều con.
                Dấu hiệu sinh con Bulldog: Cào ổ, bỏ ăn, thở mệt nhọc, lăng xăng, âm hộ nở to, có chất nhờn thì chúng ta nên đem đến phòng khám để mổ.Việc sinh nở của Bulldog cần có bác sĩ thú y trợ giúp vì kích thước quá khổ của các chú chó con.`,
                treat: `Cần đưa đến cơ sở thú y gần nhất`
            },
            {
                name: "Hoạt động thể chất phù hợp",
                sym:   `Một số các cá thể khi trưởng thành sẽ rất lười tập luyện, vì thế bạn nên cho các bài tập để giúp Bulls của chúng ta trở nên khỏe mạnh hơn, như đi dạo để đáp ứng thói quen cơ bản của chúng. Bulldog Anh có khả năng di chuyển rất nhanh trong thời gian ngắn.Trong khi đi dạo Bulldog nên được chạy bên cạnh hoặc phía sau chủ của mình, bởi bản năng mách bảo Bulldog rằng chủ nhân là người dẫn đường và ra lệnh, luyện tập cho chúng vào và thoát khỏi tất cả các cửa và cổng sau của ngôi nhà.
                Tuổi thọ trung bình: 8 - 10 năm`,
                treat: ``
            }
            
        ]
    },
    {
        type: "Chó Bull Pháp",
	image : "https://sieupet.com/sites/default/files/pictures/images/cho-bulldog-phap-dang-dung-1.png",
        char: `Chó Bull Pháp sở hữu thân hình khá vừa vặn với chiều cao dưới 30cm và nặng từ 8 - 13 kg. Dù có thân hình nhỏ bé hơn chó Bull Anh nhưng chúng lại rất cơ bắp và rắn chắc. Phần vai chúng rất rộng, rộng hơn cả phần hông. Đôi chân chúng ngắn, gân guốc chắc chắn và nhìn có vẻ lớn hơn so với cơ thể chúng. 
        Bull Pháp có bộ lông ngắn mượt mà, đôi tai to và luôn dựng lên.Đầu chúng tròn, trán rộng và dô cao.Mũi của chúng bị tẹt và luôn hếch lên.Đôi môi chúng dày và lúc nào cũng xệ xuống, che phủ cả phần miệng.
        Loài chó Bull rất lười vận động, chỉ thích ở trong nhà và ở bên cạnh chủ.Bull Pháp cũng rất hiền lành, vui vẻ, thân thiện với trẻ em, chúng cũng chẳng cắn ai bao giờ trừ khi bạn trêu chúng quá dai.
        • Tuổi thọ
        Chó Bull Pháp có tuổi thọ lâu hơn chó Bull Anh, từ 10 - 12 năm. `,
        tame: `Chăm sóc sức khỏe
        - Ngoài nguy cơ béo phì thì chúng cũng gặp vấn đề về bệnh hô hấp.Vì vậy hãy kiểm tra sức khỏe của chúng thường xuyên
        - Bạn nên đánh răng và vệ sinh răng miệng cho chúng mỗi ngày để có một hàm răng sạch, khỏe. `,
        nutri: `Chế độ dinh dưỡng
        - Bull Pháp không quá kén chọn thức ăn như những dòng chó khác.Tuy nhiên việc chúng lười vận động dẫn đến béo phì.Vì vậy cần phải dành thời gian chăm sóc bữa ăn cho chúng.
        - Chó Bull Pháp thích hợp ăn thức ăn khô và thức ăn đóng hộp
        - Chế độ ăn uống thực phẩm khô thường có thịt bò xay, thịt bò, ức gà, tim, gan, thận và xương. Ngoài ra, cũng cần bổ sung thêm một phần rau và trái cây cho chúng.`,
        sick: [
            {
                name: "Bệnh ghẻ lở",
                sym:   `do vi khuẩn Sarcoptic: Đây là một trong những bệnh thường gặp ở chó Bull Pháp. Mặc dù ghẻ lở không gây nguy hiểm quá nhiều đến tính mạng nhưng lại có khả năng gây nhiễm trùng thứ phát, khiến cho bệnh phát triển trầm trạng, thú cưng của bạn sẽ vô cùng đau đớn, khó chịu.`,
                treat: `Khi phát hiện những đốm ghẻ trên da chó bị chảy máu, rỉ mủ, bạn cần mời ngay bác sĩ thú y đến tận nhà hoặc đưa bé đến các trung tâm để khám chữa kịp thời. Đồng thời, đừng quên dọn dẹp nơi ở của chó thật sạch sẽ để tránh những mầm bệnh có thể tái phát về sau. Cũng đừng quên sử dụng các biện pháp bảo vệ an toàn cho bản thân để tránh lây lan sang con người.`
            },
            {
                name: "Chó mắc bệnh liên quan đến quá trình chọn lọc sinh sản",
                sym: `Một số nghiên cứu gần đây của Mỹ chỉ ra rằng, những sai lầm trong việc chọn lọc sinh sản sẽ gây ra những căn bệnh cực kì nguy hiểm cho chó Bull Pháp. Những bệnh này thường gặp ở chó Bull Pháp lai tạo hơn là giống thuần chủng. Để tạo ra những chú Bull Pháp có gương mặt xệ, chân ngắn hơn, người ta đã lạm dụng phương pháp lai tạo, nhưng thật không may là điều này càng khiến cho chúng gặp nhiều vấn đề về sức khỏe hơn.`,
                treat: ``
            },
            {
                name: "Bệnh Parvovirus",
                sym:   `Khi mắc bệnh này, hệ tiêu hóa của chó Bull Pháp sẽ không còn khả năng đảm đương tốt trách nhiệm của mình. Bệnh đặc biệt nguy hiểm nếu đối tượng mắc phải là những chú chó Bull Pháp sơ sinh. Khi mắc bệnh này, chó sẽ liên tục nôn ói, đi tiêu chảy nhiều lần, thậm chí đi ngoài ra máu. Khi tiếp xúc với nó, bạn sẽ cảm thấy mùi tanh hôi rất rõ rệt. Cho đến đây, mặc dù vẫn chưa có thuốc phòng ngừa cho bệnh này nhưng bạn vẫn có thể đề phòng bằng cách tiêm vắc xin cho chúng`,
                treat: ``
            },
            {
                name: "Bệnh lepto trên chó",
                sym:   `So với những bệnh ở trên, bệnh lepto không chỉ gây nguy hiểm cho chó mà còn có khả năng lây lan sang con người. Đặc biệt, tỷ lệ mắc bệnh ở những con đực lại cao hơn so với những con cái. Đây cũng chính là một trong những bệnh thường gặp có chó Bull Pháp, có tỷ lệ tử vong từ 60-100%.`,
                treat: ``
            }
            
        ]
    },
    {
        type: "Chó Phú Quốc",
	image : "https://puppyhouse.vn/wp-content/uploads/2019/12/cho-phu-quoc-1.jpg",
        char: `Chó Phú Quốc là loài chó đặc trưng của huyện đảo Phú Quốc với đặc điểm riêng là có các xoáy lông ở trên sống lưng. Vì vậy chúng còn được với cái tên là chó xoáy Phú Quốc. Hiện trên thế giới có 3 loại chó xoáy là: chó xoáy Phú Quốc, chó lông xoáy Rhodesia và chó lông xoáy Thái.
        • Đặc điểm
        Đặc điểm dễ nhận biết nhất là vòng xoáy chạy từ vai đến xương hông của chúng với 4 màu cơ bản là đốm, đen, vàng và vện, nhưng hiện nay màu lông đã có ít nhiều sự lai tạp.
        Những chú chó Phú Quốc trưởng thành nặng 20 - 25kg và sở hữu đầu nhỏ, cổ mõm dài, tai dài và mỏng cùng những chấm trên lưỡi.Chú còn có biệt tài săn thú giỏi và bơi được dưới nước nhờ vào đôi chân có màng như chân vượt và bộ lông mượt sát.
        • Tuổi thọ
        Tuổi thọ của chó Phú Quốc tối thiểu từ 7 năm trở lên nếu khỏe mạnh và không bệnh tật.`,
        tame: `Chăm sóc sức khỏe
        - Môi trường sống của chó Phú Quốc phải thật gần gũi với thiên nhiên, không gian rộng rãi để chúng có thể chạy nhảy chơi đùa. 
        - Chó Phú Quốc thích hợp với khí hậu ấm áp quanh năm như ở miền Nam nên ở miền Bắc chó Phú Quốc không được nuôi phổ biến.Nhưng nếu nuôi chó Phú Quốc ở miền Bắc bạn nên giữ ấm thật tốt cho chúng vào mùa đông và hạn chế ra ngoài.`,
        nutri: `Chế độ dinh dưỡng
        - Tuy mang tiếng chó ta nhưng chó Phú Quốc khá kén ăn.Khẩu phần ăn của chúng thường là hải sản như tôm, cua, cá,...Ngoài ra bạn cũng có thể cho chúng ăn thịt, xương như bình thường
        - Không nên cho chó Phú Quốc ăn quá nhiều và không nên cho chúng ăn trong thời gian quá lâu.Mỗi bữa chỉ nên để đồ ăn từ 15 - 20 phút sau đó cất đi nhằm mục đích phải ăn ngay khi đến bữa.`,
        sick: [
            {
                name: "Bệnh ghẻ lở",
                sym:   `do vi khuẩn Sarcoptic: Đây là một trong những bệnh thường gặp ở chó Bull Pháp. Mặc dù ghẻ lở không gây nguy hiểm quá nhiều đến tính mạng nhưng lại có khả năng gây nhiễm trùng thứ phát, khiến cho bệnh phát triển trầm trạng, thú cưng của bạn sẽ vô cùng đau đớn, khó chịu.`,
                treat: `Khi phát hiện những đốm ghẻ trên da chó bị chảy máu, rỉ mủ, bạn cần mời ngay bác sĩ thú y đến tận nhà hoặc đưa bé đến các trung tâm để khám chữa kịp thời. Đồng thời, đừng quên dọn dẹp nơi ở của chó thật sạch sẽ để tránh những mầm bệnh có thể tái phát về sau. Cũng đừng quên sử dụng các biện pháp bảo vệ an toàn cho bản thân để tránh lây lan sang con người.`
            },
            {
                name: "Chó mắc bệnh liên quan đến quá trình chọn lọc sinh sản",
                sym: `Một số nghiên cứu gần đây của Mỹ chỉ ra rằng, những sai lầm trong việc chọn lọc sinh sản sẽ gây ra những căn bệnh cực kì nguy hiểm cho chó Bull Pháp. Những bệnh này thường gặp ở chó Bull Pháp lai tạo hơn là giống thuần chủng. Để tạo ra những chú Bull Pháp có gương mặt xệ, chân ngắn hơn, người ta đã lạm dụng phương pháp lai tạo, nhưng thật không may là điều này càng khiến cho chúng gặp nhiều vấn đề về sức khỏe hơn.`,
                treat: ``
            },
            {
                name: "Bệnh Parvovirus",
                sym:   `Khi mắc bệnh này, hệ tiêu hóa của chó Bull Pháp sẽ không còn khả năng đảm đương tốt trách nhiệm của mình. Bệnh đặc biệt nguy hiểm nếu đối tượng mắc phải là những chú chó Bull Pháp sơ sinh. Khi mắc bệnh này, chó sẽ liên tục nôn ói, đi tiêu chảy nhiều lần, thậm chí đi ngoài ra máu. Khi tiếp xúc với nó, bạn sẽ cảm thấy mùi tanh hôi rất rõ rệt. Cho đến đây, mặc dù vẫn chưa có thuốc phòng ngừa cho bệnh này nhưng bạn vẫn có thể đề phòng bằng cách tiêm vắc xin cho chúng`,
                treat: ``
            },
            {
                name: "Bệnh lepto trên chó",
                sym:   `So với những bệnh ở trên, bệnh lepto không chỉ gây nguy hiểm cho chó mà còn có khả năng lây lan sang con người. Đặc biệt, tỷ lệ mắc bệnh ở những con đực lại cao hơn so với những con cái. Đây cũng chính là một trong những bệnh thường gặp có chó Bull Pháp, có tỷ lệ tử vong từ 60-100%.`,
                treat: ``
            }
            
        ]
    },
    {
        type: "Chó Lạp Xưởng",
	image : "https://sieupet.com/sites/default/files/lap_xuong1_0.jpg",
        char: `Chó Lạp xưởng hay còn được gọi với tên tiếng Anh là chó Dachshund, là giống chó có nguồn gốc từ Đức và được biết đến như một loài chó săn có kích thước nhỏ.
        Chó Lạp xưởng có thân hình dài và đôi chân ngắn.Chúng có 3 kiểu lông phổ biến là lông ngắn, lông xoăn và lông dài cùng các màu sắc như đen, nâu, xám, đỏ, kem,...
        Ngoại hình không được cân đối có lẽ đã làm chú chó này trở nên thú vị và ngộ nghĩnh trong mắt nhiều người.Cùng với đó là đôi tai dài, cụp hẳn xuống giúp ngăn chặn sự xâm nhập của bụi bẩn và côn trùng.
        Chó Lạp xưởng có 3 loại kích cỡ khác nhau.Hai kích cỡ phổ biến là Standard(những chú chó cao từ 20 - 27 cm và cân nặng trên 4,
        9kg), Miniature(Có chiều cao không vượt quá 13 - 18cm, cân nặng dưới 5kg) và bên châu Âu có bổ sung thêm 1 kích cỡ là Toy(chiều cao từ 30cm trở lên và cân nặng khoảng 3,5kg).
        Đặc trưng của giống chó này là thích đào bới, chạy nhảy, rượt đuổi và săn bắt.Chúng cũng rất thích làm thân với con người và cũng khá thân thiện.
        • Tuổi thọ
        Chó Lạp Xưởng là giống chó săn của Đức và được xếp và giống chó sống thọ.Tuổi thọ của giống chó này là từ 14 - 17 năm nếu được chăm sóc tốt và không mắc bệnh. `,
        tame: `Chăm sóc sức khỏe
        Thường xuyên cho chúng ra ngoài vận động, dạo chơi ít nhất nửa tiếng mỗi ngày
        - Chúng rất thích đào bới nên nếu không muốn tắm nhiều cho chúng hãy hạn chế dẫn Lạp xưởng đến những nơi có đất cát
        - Đôi lúc chúng rất hung hăng, chúng có thể đuổi theo và tấn công những con vật khác khi bản năng săn mồi trỗi dậy.Hãy để ý tới chúng và nên có dây dắt khi đi ra ngoài.`,
        nutri: `Chế độ dinh dưỡng
        - Lạp xưởng là giống chó lao động nên không kén ăn.Bạn chú ý bổ sung cho chúng thực phẩm giàu dinh dưỡng, đặc biệt là protein. 
        - Protein chiếm 22 - 28 % tổng khối lượng thức ăn hằng ngày; chất xơ, tinh bột, nước và vitamin là 58 - 66 %; chất béo chiếm từ 12 - 15 %`,
        sick: [
            {
                name: "Bệnh béo phì",
                sym:   `Bệnh này do người nuôi cho chó ăn quá nhiều. Bệnh này thường hay gặp ở những con chó đã lớn tuổi, lười vận động`,
                treat: ``
            },
            {
                name: "Bệnh đau cột sống",
                sym: `Thân hình của loài chó này khá dài, chân ngắn lại thích chạy nhảy nên dễ mắc bệnh này. Bệnh khiến chúng không thể đứng dậy bằng 2 chân sau và mất kiểm soát trong việc tiểu tiện.`,
                treat: ``
            },
            {
                name: "Bệnh đường ruột, tiêu hóa",
                sym:   `Bệnh này thường gặp ở chó con khoảng 2 – 3 tháng tuổi khi mà hệ tiêu hóa còn kém. Khi bị bệnh chó sẽ bị nôn mửa, đi ỉa chảy và kém ăn.`,
                treat: ``
            }
            
        ]
    }
]