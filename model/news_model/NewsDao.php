<?php 

require_once './model/db.php';
require_once 'NewsEntity.php';

class NewsDao extends Db {

    public function __construct(){
        Db::__construct(); //== parent::__construct();
    }

    function getAllNews() {

        $dbconn = $this->conn;
        $sql = "SELECT * FROM t_news";

        $stmt = $dbconn->prepare($sql);
        $stmt->execute();

        // $rows = $stmt->fetchAll(PDO::FETCH_ASSOC); the lazy way, shown ../user_model/UserDao.php :)

        $rows = array();

        while($row = $stmt->fetch()) {

            $id = $row['id'];
            $date = $row['date'];
            $title = $row['title'];
            $description = $row['description'];
            $text = $row['text'];

            $rs = new NewsEntity();
            $rs->setId($id);
            $rs->setDate($date);
            $rs->setTitle($title);
            $rs->setDescription($description);
            $rs->setText($text);

            $rows[] = array(
                'id' => $rs->getId(),
                'date' => $rs->getDate(),
                'title' => $rs->getTitle(),
                'description' => $rs->getDescription(),
                'text' => $rs->getText()
            );
        }

        return $rows;
    }

    function searchByTitle($title) {

        $dbconn = $this->conn;
        $sql = "SELECT * FROM t_news WHERE title like '". "%". $title ."%" . "'";
        $stmt = $dbconn->prepare($sql);
        $stmt->execute();

        $rows = array();

        while($row = $stmt->fetch()) {
            
            $rows[] = array(
                'id' => $row['id'],
                'date' => $row['date'],
                'title' => $row['title'],
                'description' => $row['description'],
                'text' => $row['text']
            );
        }

        return $rows[0];
    }

    function searchByDates($dateFrom, $dateTo) {

        $dbconn = $this->conn;
        $sql = "SELECT * FROM t_news WHERE ";
        $sql .= "date BETWEEN ". "'". $dateFrom . "' AND " . "'" . $dateTo . "'";
        $stmt = $dbconn->prepare($sql);
        $stmt->execute();

        $rows = array();

        while($row = $stmt->fetch()) {
            
            $rows[] = array(
                'id' => $row['id'],
                'date' => $row['date'],
                'title' => $row['title'],
                'description' => $row['description'],
                'text' => $row['text']
            );
        }

        return $rows;
    }

    function searchByDatesAndTitle($title = null, $dateFrom = null, $dateTo = null) {
        
        $dbconn = $this->conn;
        $sql = "SELECT * FROM t_news WHERE ";
        $sql .= "title like ". "'%". $title ."%' ";
        $sql .= "AND date BETWEEN ". "'". $dateFrom . "' AND " . "'" . $dateTo . "'";
        $stmt = $dbconn->prepare($sql);
        $stmt->execute();

        $rows = array();

        while($row = $stmt->fetch()) {
            
            $rows[] = array(
                'id' => $row['id'],
                'date' => $row['date'],
                'title' => $row['title'],
                'description' => $row['description'],
                'text' => $row['text']
            );
        }

        return $rows;
    }


    function insertNews($date, $title, $description, $text) {
        
        $dbconn = $this->conn;
        $sql = "INSERT INTO t_news (id, date, title, description, text) ";
        $sql .= "VALUES (NULL, :date, :title, :description, :text)";
        
        $stmt = $dbconn->prepare($sql);
        
        $stmt->bindParam(':date', $date);
        $stmt->bindParam(':title', $title);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':text', $text);

        $stmt->execute();
        $dbconn = null;
    }

    function deleteNews($id) {
        $dbconn = $this->conn;
        $sql = "DELETE FROM t_news WHERE id=" . $id;
        $dbconn->exec($sql);
        $dbconn = null;
    }
    
    function updateNews($id, $date, $title, $description, $text) {
        
        $dbconn = $this->conn;

        $data = [
            'id' => $id,
            'date' => $date,
            'title' => $title,
            'description' => $description,
            'text' => $text
        ];

        $sql = "UPDATE t_news SET date=:date, title=:title, ";
        $sql .= "description=:description, text=:text WHERE id=:id";

        $stmt = $dbconn->prepare($sql);
        $stmt->execute($data);

        $dbconn = null;
    }

}

?>