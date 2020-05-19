<?php 

require_once './controllers/Controller.php';
require_once './model/user_model/UserDao.php';

class UserController extends Controller{

    public function handleLoginInput() {
        
        $data = json_decode(file_get_contents('php://input'), true);

        if(!empty($data['email']) && !empty($data['pwd'])) {
            
            $email = $data['email'];
            $this->escapeInput($email);

            $pwd = $data['pwd'];
            $this->escapeInput($pwd);

            $resArr = array(
                'email' => $email,
                'pwd' => $pwd
            );

            $this->setJsonToken($email, $pwd);
        }
        
    }

    public function setJsonToken($email, $pwd) {
        
        if (!empty($email) && !empty($pwd)) {

            $user_dao = new UserDao();

            if ($user_dao->isValidUser($email, $pwd)) {

                if ($email == 'admin@admin.com') {

                    $out = array('token' => 'admin!123');

                } else {
                       
                    $out = array('token' => 'visitor!123');
                } 

                echo json_encode($out);

            } else {
                $out = array('token' => 'OUT!');
                echo json_encode($out);
            }
        }
        
    }

    function usersProvider() {
        $user_dao = new UserDao();
        $users = $user_dao->getAllUsers();
        echo json_encode($users);
    }

    function saveUser() {

        $data = json_decode(file_get_contents('php://input'), true);

        if (!empty($data['email']) && !empty($data['pwd'])) {

            $errArr = array(); 

            $email = $data['email'];
            $email = $this->escapeInput($email);

            $pwd = $data['pwd'];
            $pwd = $this->escapeInput($pwd);

            $emailRegEx = "/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix";
            if(!preg_match($emailRegEx, $email)) {
                $errArr[] = "Invalid Email!";
            }

            /*
            // The same but shorter:
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $errArr[] = "Invalid Email!";
            }
            */

            if (strlen($pwd) < 7 || strlen($pwd) > 80) {
                $errArr[] = 'Your password should be between 7 and 80 characters !';
            }
            
            if (count($errArr) > 0) {
                foreach($errArr as $val) {
                    echo $val;
                }
            } else {
                $user_dao = new UserDao();
                $user_dao->insertUser($email, $pwd);
            }
        }   
    }

    function delUser() {

        $data = json_decode(file_get_contents('php://input'), true);

        if (!empty($data['uid'])) {
            $uid = $data['uid'];
            $user_dao = new UserDao();
            $user_dao->deleteUser($uid);
        }
    }

    function editUser() {

        $data = json_decode(file_get_contents('php://input'), true);

        if (!empty($data['uid']) && !empty($data['email']) && !empty($data['pwd'])) {

            $errArr = array(); 
            
            $uid = $data['uid'];

            $email = $data['email'];
            $email = $this->escapeInput($email);

            $emailRegEx = "/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix";
            if(!preg_match($emailRegEx, $email)) {
                $errArr[] = "Invalid Email!";
            }

            $pwd = $data['pwd'];
            $pwd = $this->escapeInput($pwd);

            if (strlen($pwd) < 7 || strlen($pwd) > 80) {
                $errArr[] = 'Your password should be between 7 and 80 characters !';
            }

            if (count($errArr) > 0) {
                foreach($errArr as $val) {
                    echo $val;
                }
            } else { 
                $user_dao = new UserDao();
                $user_dao->updateUser($uid, $email, $pwd);
            }
        }
    }


}

?>