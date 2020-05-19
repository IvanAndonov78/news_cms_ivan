<?php 

require_once './controllers/Controller.php';
require_once './model/news_model/NewsDao.php';

class NewsController extends Controller{

    public function __construct(){
    }

    public function newsProvider() {
        $news_dao = new NewsDao();
        $data = $news_dao->getAllNews();
        echo json_encode($data);
    }

    public function search() {
        
        $data = json_decode(file_get_contents('php://input'), true);

        if (!empty($data['title']) && !empty($data['fromDate'])
            && !empty($data['toDate'])) {

            $errArr = array(); 
                        
            $title = $data['title'];
            $dateFrom = $data['fromDate'];
            $dateTo = $data['toDate'];

            if (strlen($title) > 50) {
                $errArr[] = 'The Title should be shorter than 50 characters !';
            }

            if ($dateFrom > $dateTo) {
                $errArr[] = 'The From Date should be less than the To Date !';
            }
            
            if (count($errArr) > 0) {
                foreach($errArr as $val) {
                    $e = array(
                        'error' => $val
                    );
                    echo json_encode($e);
                }
            } else {
                $news_dao = new NewsDao();
                $result = $news_dao->searchByDatesAndTitle($title, $dateFrom, $dateTo);
                echo json_encode($result);
            }
        }
    }
        
    function saveNews() {

        $data = json_decode(file_get_contents('php://input'), true);

        if (!empty($data['date']) && !empty($data['title'])
            && !empty($data['description']) && !empty($data['text'])) {

            $errArr = array(); 

            $date = $data['date'];
            $date = $this->escapeInput($date);

            $title = $data['title'];
            $title = $this->escapeInput($title);

            $description = $data['description'];
            $description = $this->escapeInput($description);

            $text = $data['text']; // textarea
            $text = $this->escapeInput($text);

            if (strlen($title) > 50) {
                $errArr[] = 'The Title should be shorter than 50 characters !';
            }
            
            if (count($errArr) > 0) {
                foreach($errArr as $val) {
                    echo $val;
                }
            } else {
                $news_dao = new NewsDao();
                $news_dao->insertNews($date, $title, $description, $text);
            }
        }   
    }

    function delNews() {

        $data = json_decode(file_get_contents('php://input'), true);

        if (!empty($data['id'])) {

            $id = $data['id'];
            $news_dao = new NewsDao();
            $news_dao->deleteNews($id);
        }
    }

    function editNews() {

        $data = json_decode(file_get_contents('php://input'), true);

        if (!empty($data['id']) && !empty($data['date']) 
            && !empty($data['title']) && !empty($data['description'])
            && !empty($data['text'])) {

            $errArr = array();  

            $id = $data['id'];
            $id = $this->escapeInput($id);

            $date = $data['date'];
            $date = $this->escapeInput($date);

            $title = $data['title'];
            $title = $this->escapeInput($title);

            $description = $data['description'];
            $description = $this->escapeInput($description);

            $text = $data['text']; // textarea
            $text = $this->escapeInput($text);
                        
            if (strlen($title) > 50) {
                $errArr[] = 'The Snippet Name should be shorter than 50 characters !';
            }

            if (count($errArr) > 0) {
                foreach($errArr as $val) {
                    echo $val;
                }
            } else { 
                $news_dao = new NewsDao();
                $news_dao->updateNews($id, $date, $title, $description, $text);
            }
        }
    }

}

?>