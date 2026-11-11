'use strict';
/* English locale for Innerlab Courses.
   Course IDs stay unchanged; only visitor-facing copy is translated. */
(() => {
  const localizedCatalog = {
    'hieu-minh': {
      title:'Understanding Yourself & Others',
      categoryName:'SELF-DISCOVERY',
      short:'Start with the questions within to better understand how you think, feel, and connect.',
      audience:'A place to begin',
      topics:['Identify your values and personal strengths','Explore how you think and respond','Understand different communication styles','Create a personal growth plan that suits you'],
      after:'A starting point to understand yourself more clearly.'
    },
    'tri-tue-cam-xuc': {
      title:'Emotional Intelligence',
      categoryName:'SELF-DISCOVERY',
      short:'Learn to name your feelings, listen to yourself, and build healthier connections.',
      audience:'For your inner journey',
      topics:['Recognize emotions and underlying needs','Understand your response patterns','Practice listening and sharing feelings','Build habits for looking after yourself'],
      after:'Find the words to understand emotions and relationships.'
    },
    'giao-tiep-tu-tin': {
      title:'Communication & Confidence',
      categoryName:'LIFE SKILLS',
      short:'Find your voice and practice expressing yourself clearly and naturally.',
      audience:'For better connection',
      topics:['Recognize your personal communication style','Practice active listening and thoughtful feedback','Express ideas more clearly','Practice real-life communication scenarios'],
      after:'Speak and share ideas with greater confidence.'
    },
    'hoc-tap-hieu-qua': {
      title:'Learning & Thinking Effectively',
      categoryName:'LIFE SKILLS',
      short:'Discover how you learn best, stay focused, and turn knowledge into action.',
      audience:'For curious learners',
      topics:['Explore your learning style and motivation','Set practical learning goals','Strengthen questioning and memory skills','Build sustainable study habits'],
      after:'Take a more active approach to learning.'
    },
    'dinh-huong-tuong-lai': {
      title:'Planning Your Future',
      categoryName:'LIFE SKILLS',
      short:'Connect your interests, abilities, and options to find a direction that suits you.',
      audience:'For life transitions',
      topics:['Discover what matters to you','Explore your strengths and interests','Clarify your current options','Build a plan of small, achievable steps'],
      after:'Feel clearer about the direction you want to pursue.'
    },
    'ai-ung-dung': {
      title:'AI for Life & Work',
      categoryName:'AI & TECHNOLOGY',
      short:'Get to know AI and learn how to use smart tools for learning, creativity, and work.',
      audience:'For AI beginners',
      topics:['Understand the possibilities and limitations of AI','Ask better questions to get useful results','Use AI for learning and everyday work','Verify information and use AI responsibly'],
      after:'Feel confident trying AI on practical tasks.'
    }
  };
  const originalCourseNames = {};
  COURSES.forEach(course => {
    const translation = localizedCatalog[course.id];
    if (translation) {
      originalCourseNames[course.id] = course.title;
      Object.assign(course, translation);
    }
  });
  // Restore consistent Vietnamese course titles in data submitted to the existing Sheet.
  const oldSummary = window.summary;
  if (typeof oldSummary === 'function') {
    window.summary = data => [
      'INNERLAB COURSES — COURSE INTEREST',
      'Reference code: ' + data.inquiry_code,
      'Name: ' + data.full_name,
      'Phone / Zalo: ' + data.contact,
      'Course: ' + (localizedCatalog[data.course_id]?.title || data.course_title),
      'What you hope to learn: ' + (data.note || 'Not provided'),
      'Submitted: ' + data.submitted_at,
      'I agree that Innerlab may contact me about the selected course.'
    ].join('\n');
  }
  const translations = new Map(Object.entries({
    'Đến nội dung chính': 'Skip to main content',
    'Innerlabvn Courses, về đầu trang':'Innerlabvn Courses, back to top',
    'Điều hướng chính':'Main navigation',
    'Điều hướng di động':'Mobile navigation',
    'Mở menu':'Open menu',
    'Đóng menu':'Close menu',
    'Chọn ngôn ngữ':'Choose language',
    'Khóa học':'Courses',
    'Cách Innerlab đồng hành':'How Innerlab supports you',
    'Câu hỏi thường gặp':'FAQ',
    'Làm khảo sát':'Take the survey',
    'Đăng ký tư vấn':'Request information',
    'Khám phá khóa học':'Explore courses',
    'Vì sao chọn Innerlab':'Why Innerlab',
    'Khảo sát bản thân ↗':'Self-discovery survey ↗',
    'Đăng ký tư vấn ↗':'Request information ↗',
    'Hiểu mình sâu hơn.':'Understand yourself deeply.',
    'Đi xa hơn mỗi ngày.':'Grow further every day.',
    'Không chỉ học thêm một kỹ năng. Innerlab mở ra hành trình để bạn hiểu bản thân, tự tin lựa chọn và phát triển theo cách của riêng mình.':'Go beyond learning a new skill. Innerlab invites you to understand yourself, make confident choices, and grow in your own way.',
    'Tìm hiểu Innerlab':'About Innerlab',
    'Học để hiểu mình':'Learn to understand',
    'Học để ứng dụng':'Learn by doing',
    'Học theo nhịp riêng':'Learn your way',
    'Dám khám phá':'Dare to discover',
    'Không ngừng trưởng thành':'Keep growing',
    'Giá trị Innerlab':'Innerlab values',
    'Mọi thay đổi ý nghĩa đều bắt đầu từ một câu hỏi:':'Every meaningful change starts with a question:',
    '“Mình thực sự muốn trở thành ai?”':'“Who do I truly want to become?”',
    'Chọn điều bạn muốn':'Choose what you want to',
    'khám phá.':'explore.',
    'Tìm chương trình gần với điều bạn đang quan tâm — mỗi hành trình có một điểm bắt đầu riêng.':'Find a program that speaks to you. Every journey begins somewhere.',
    'DANH MỤC GIỚI THIỆU':'PREVIEW CATALOG',
    'Thông tin học phí và lịch mở lớp sẽ được cập nhật':'Prices and class dates will be announced',
    'Lọc theo lĩnh vực':'Filter by category',
    'Tất cả khóa học':'All courses',
    'Khám phá bản thân':'Self-discovery',
    'Kỹ năng sống':'Life skills',
    'AI & công nghệ':'AI & technology',
    'Tìm khóa học':'Search courses',
    'Tìm theo tên hoặc chủ đề...':'Search courses or topics...',
    'Chưa tìm thấy khóa học phù hợp':'No matching courses found',
    'Thử từ khóa hoặc nhóm chủ đề khác nhé.':'Try a different keyword or category.',
    'Xem tất cả khóa học':'View all courses',
    'Đây là những':'These are',
    'chương trình giới thiệu dự kiến':'proposed introductory programs',
    '. Nội dung, học phí, giảng viên và lịch khai giảng chính thức sẽ được Innerlab xác nhận trước khi mở đăng ký.':'. Final curricula, tuition, instructors, and schedules will be confirmed before registration opens.',
    'Học để':'Learn to',
    'thật sự thay đổi.':'make real change.',
    'Innerlab hướng đến trải nghiệm học tập nơi bạn được khám phá, đặt câu hỏi và tìm ra những bước tiến vừa sức cho chính mình.':'Innerlab aims to create learning experiences where you can explore, ask questions, and find manageable steps forward.',
    'Tìm hành trình của bạn':'Find your path',
    'Khám phá':'Explore',
    'Nhận diện điều mình quan tâm, những điểm mạnh và câu hỏi bên trong.':'Recognize your interests, strengths, and inner questions.',
    'Thực hành':'Practice',
    'Biến kiến thức thành trải nghiệm gần gũi với đời sống thường ngày.':'Turn ideas into experiences that matter in everyday life.',
    'Trưởng thành':'Grow',
    'Xây dựng thói quen, tư duy và lựa chọn phù hợp hơn với hành trình riêng.':'Build habits, thinking skills, and choices that fit your journey.',
    'KHÔNG BIẾT NÊN BẮT ĐẦU TỪ ĐÂU?':'NOT SURE WHERE TO START?',
    'Hiểu nhu cầu của mình':'Understand your needs',
    'trước khi chọn khóa học.':'before choosing a course.',
    'Khảo sát ngắn của Innerlab giúp bạn nhìn lại những điều đang quan tâm trong hành trình phát triển bản thân.':'Innerlab’s short survey helps you reflect on what matters to you as you grow.',
    'Làm khảo sát miễn phí':'Take the free survey',
    'Bạn có thể':'You might be',
    'đang thắc mắc.':'wondering.',
    'Khóa học hiện đã có lịch khai giảng và học phí chưa?':'Are course dates and prices available yet?',
    'Danh mục trên đang trong giai đoạn giới thiệu. Khi lịch học, học phí và hình thức triển khai được chốt, Innerlab sẽ cung cấp thông tin cụ thể trước khi bạn quyết định tham gia.':'This is a preview catalog. Once dates, tuition, and learning formats are confirmed, Innerlab will share the details before you decide to enroll.',
    'Em chưa biết chọn chương trình nào thì sao?':'What if I do not know which course to choose?',
    'Bạn có thể làm khảo sát khám phá nhu cầu hoặc để lại thông tin ở phần đăng ký quan tâm. Innerlab sẽ trao đổi để hiểu điều bạn đang tìm kiếm.':'You can complete the discovery survey or leave your details in the interest form. Innerlab will reach out to understand what you are looking for.',
    'Việc để lại thông tin có đồng nghĩa với thanh toán không?':'Does submitting the form mean I have to pay?',
    'Không. Đây là đăng ký quan tâm, chưa phải giao dịch thanh toán hoặc xác nhận giữ chỗ. Innerlab sẽ thông báo rõ nội dung và học phí chính thức trước khi mở bán.':'No. This is an expression of interest, not a payment or confirmed reservation. Innerlab will clearly announce the official course content and tuition before sales begin.',
    'Thông tin liên hệ của em sẽ được sử dụng như thế nào?':'How will my contact information be used?',
    'Thông tin bạn cung cấp chỉ được sử dụng cho mục đích liên hệ về chương trình bạn quan tâm theo lựa chọn đồng ý trong biểu mẫu. Không đăng tải số điện thoại của người đăng ký công khai.':'Your information is used only to contact you about the program you selected, with your consent. Phone numbers will not be published.',
    'Một hành trình mới':'A new chapter',
    'bắt đầu từ':'begins',
    'hôm nay.':'today.',
    'Tôi muốn được liên hệ':'Contact me',
    'Khám phá · Hiểu mình · Phát triển':'Discover · Understand · Grow',
    'KHÁM PHÁ':'EXPLORE',
    'Khảo sát Innerlab ↗':'Innerlab survey ↗',
    'Innerlab. Thiết kế cho hành trình phát triển của bạn.':'Innerlab. Designed for your personal growth journey.',
    'Website giới thiệu chương trình · Chưa tích hợp thanh toán trực tuyến.':'Program preview website · Online payments are not enabled.',
    'Đóng':'Close',
    'Cùng bắt đầu':'Let’s begin',
    'hành trình của bạn.':'your journey.',
    'Để lại thông tin về chương trình bạn quan tâm. Đây chưa phải đăng ký thanh toán.':'Tell us which program interests you. This is not a payment or confirmed enrollment.',
    'Họ và tên':'Full name',
    'Tên của bạn':'Your name',
    'Số điện thoại / Zalo':'Phone number / Zalo',
    'Chương trình bạn quan tâm':'Program you are interested in',
    'Chọn khóa học':'Choose a course',
    'Điều bạn mong đợi ở khóa học':'What do you hope to gain from this course?',
    'Bạn muốn phát triển điều gì? (không bắt buộc)':'What would you like to develop? (optional)',
    'Tôi đồng ý để Innerlab sử dụng thông tin trên nhằm liên hệ về khóa học tôi quan tâm. Tôi hiểu đây chưa phải giao dịch thanh toán.':'I agree that Innerlab may use this information to contact me about the course I selected. I understand this is not a payment.',
    'Gửi đăng ký quan tâm':'Submit interest form',
    'Khi chưa kết nối Google Sheets, bạn có thể sao chép mẫu đăng ký. Website không tự lưu thông tin cá nhân khi chưa được cấu hình.':'Until Google Sheets is connected, you can copy your registration details. This website does not collect or store your personal information automatically.',
    'ĐANG GIỚI THIỆU':'PREVIEW',
    'Học phí: cập nhật sau':'Tuition: TBA',
    'Xem nội dung ↗':'View details ↗',
    'Đăng ký quan tâm ↗':'Register interest ↗',
    'NHỮNG NỘI DUNG CÓ THỂ KHÁM PHÁ':'TOPICS YOU MAY EXPLORE',
    'Điều bạn hướng đến:':'What you can work toward:',
    'Lịch học và học phí':'Schedule and tuition',
    'Được công bố trước khi mở lớp':'Announced before enrollment',
    'Tôi quan tâm khóa này ↗':'I’m interested ↗',
    'Gửi đăng ký quan tâm ↗':'Submit interest form ↗',
    'Sao chép thông tin đăng ký ↗':'Copy my details ↗',
    'Sao chép lại':'Copy again',
    'Đã sao chép thông tin.':'Details copied.',
    'Hãy chọn và sao chép nội dung hiển thị bên dưới.':'Select and copy the information below.',
    'Vui lòng điền họ tên, số điện thoại / Zalo, chọn khóa học và đồng ý để Innerlab liên hệ.':'Please enter your name, phone / Zalo number, choose a course and consent to contact.',
    'Vui lòng nhập số di động Việt Nam hợp lệ (ví dụ: 0912 345 678).':'Please enter a valid Vietnamese mobile number (e.g. 0912 345 678).',
    'Khóa học đã chọn không hợp lệ.':'The selected course is not valid.',
    'Thông tin đã chuẩn bị':'Your details are ready',
    'Trang đang ở chế độ giới thiệu và chưa kết nối nơi nhận đăng ký. Nội dung đã được sao chép nếu trình duyệt cho phép; vui lòng lưu lại để gửi khi Innerlab công bố kênh liên hệ.':'This preview site is not yet connected to a registration receiver. The details were copied if your browser allowed it. Please keep them until Innerlab publishes a contact channel.',
    'Đang gửi yêu cầu...':'Sending your request...',
    'Yêu cầu đã được gửi từ trình duyệt':'Request sent from your browser',
    'Hệ thống chưa thể tự xác minh việc Google Sheets đã ghi nhận. Vui lòng lưu mã tham chiếu và chờ Innerlab xác nhận.':'The website cannot verify that Google Sheets saved this request. Please keep your reference code and wait for confirmation from Innerlab.',
    'Không thể gửi yêu cầu. Vui lòng kiểm tra mạng và thử lại.':'Could not submit your request. Please check your internet connection and try again.'
  }));
  const english = text => {
    if (!text) return text;
    const raw = String(text), key=raw.trim();
    if (!key) return raw;
    const translated = translations.get(key);
    return translated === undefined ? raw : raw.replace(key,translated);
  };
  function translate(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      const en = english(root.nodeValue);
      if(en!==root.nodeValue)root.nodeValue=en;
      return;
    }
    if(root.nodeType!==Node.DOCUMENT_NODE && root.nodeType!==Node.ELEMENT_NODE)return;
    function processElement(el) {
      for(const name of ['aria-label','title','placeholder']){
        const val=el.getAttribute(name);if(val){const en=english(val);if(en!==val)el.setAttribute(name,en)}
      }
    }
    if(root.nodeType===Node.ELEMENT_NODE)processElement(root);
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);
    let n;
    while((n=walker.nextNode())){
      if(n.nodeType===Node.ELEMENT_NODE)processElement(n);
      else{const en=english(n.nodeValue);if(en!==n.nodeValue)n.nodeValue=en}
    }
  }
  document.documentElement.lang='en';
  renderCourses(); // Populate the page with English titles, descriptions, and searchable topics.
  translate(document.body);
  const watcher=new MutationObserver(records=>{
    for(const record of records){
      if(record.type==='characterData')translate(record.target);
      else if(record.type==='attributes')translate(record.target);
      for(const n of record.addedNodes)translate(n);
    }
  });
  watcher.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','title','placeholder']});
})();