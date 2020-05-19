<?php 

require_once './model/db.php';
require_once 'UserEntity.php';

class UserDao extends Db {

    public function __construct(){
        Db::__construct(); //== parent::__construct();
    }

    function isValidUser($email, $pwd) {
        
        $dbconn = $this->conn;
        $sql = "SELECT * FROM t_user WHERE t_user.email=";
        $sql .= "'". $email . "'";
        $sql .= " AND t_user.pwd=" . "'" . md5($pwd) . "'";
        $stmt = $dbconn->prepare($sql);
        $stmt->execute();
        
        $db_email = '';
        $db_pwd = '';
        while($single_row = $stmt->fetch()) {
            $db_email = $single_row['email'];
            $db_pwd = $single_row['pwd'];
        }
        
        if ($email == $db_email && md5($pwd) == $db_pwd) {
            return true;
        } 

        return false;
    }

    function getAllUsers() {
        
        $dbconn = $this->conn;
        $sql = "SELECT * FROM t_user";

        $stmt = $dbconn->prepare($sql);
        $stmt->execute();

        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC); 

        return $rows;
    }

    function isRegisteredUser($email) {
        
        $dbconn = $this->conn;
        $sql = "SELECT * from t_user where email=". "'" . $email ."'";
        $stmt = $dbconn->prepare($sql);
        $stmt->execute();
        $stmt->fetch(PDO::FETCH_ASSOC);
        $rows = $stmt->fetchAll();

        if (count($rows) > 0) {
            return true;
        } 

        return false;
    }
    
    function insertUser($email, $pwd) {
        
        if (!$this->isRegisteredUser($email)) {

            $pwd = md5($pwd);

            $dbconn = $this->conn;
            $sql = "INSERT INTO t_user (uid, email, pwd) ";
            $sql .= "VALUES (NULL, :email, :pwd)";
            $stmt = $dbconn->prepare($sql);

            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':pwd', $pwd); 
            $stmt->execute();
            $dbconn = null;
        } else {
            echo "This user's email is registered!";
        }
    }

    function deleteUser($uid) {
        $dbconn = $this->conn;
        $sql = "DELETE FROM t_user WHERE uid=" . $uid;
        $dbconn->exec($sql);
        $dbconn = null;
    }

    function updateUser($uid, $email, $pwd) {

        if (!$this->isRegisteredUser($email)) {

            $pwd = md5($pwd);

            $dbconn = $this->conn;
            $sql = "UPDATE t_user SET email=" . "'" . $email . "'";
            $sql .= ", pwd=" . "'" . $pwd . "'"; 
            $sql .= " WHERE uid=" . $uid;
            $stmt = $dbconn->prepare($sql);
            $stmt->execute();
            $dbconn = null;
        }
    }

}


?>