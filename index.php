<?php 

require_once './controllers/Controller.php';

$qs = $_SERVER['QUERY_STRING'];

function frontController($qs) {

    switch ($qs) {
        case '/':
            require_once __DIR__ . '/views/index.html';
            break;
        case '':
            require_once __DIR__ . '/views/index.html';
            break;
        case 'login':
            require_once __DIR__ . '/controllers/user_controller.php';
            $user_controller = new UserController();
            $user_controller->handleLoginInput();
            break;
        case 'users_admin_rep': 
            require_once __DIR__ . '/controllers/user_controller.php';
            $user_controller = new UserController();
            $user_controller->usersProvider();
            break;
        case 'insert_user': 
            require_once __DIR__ . '/controllers/user_controller.php';
            $user_controller = new UserController();
            $user_controller->saveUser(); 
            break;
        case 'del_user': 
            require_once __DIR__ . '/controllers/user_controller.php';
            $user_controller = new UserController();
            $user_controller->delUser();
            break;
        case 'update_user': 
            require_once __DIR__ . '/controllers/user_controller.php';
            $user_controller = new UserController();
            $user_controller->editUser();
            break; 
        case 'news': 
            require_once __DIR__ . '/controllers/news_controller.php';
            $news_controller = new NewsController();
            $news_controller->newsProvider();
            break;
        case 'news_admin_rep': 
            require_once __DIR__ . '/controllers/news_controller.php';
            $news_controller = new NewsController();
            $news_controller->newsProvider();
            break;
        case 'insert_news': 
            require_once __DIR__ . '/controllers/news_controller.php';
            $news_controller = new NewsController();
            $news_controller->saveNews();
            break;    
        case 'del_news': 
            require_once __DIR__ . '/controllers/news_controller.php';
            $news_controller = new NewsController();
            $news_controller->delNews();
            break;
        case 'update_news': 
            require_once __DIR__ . '/controllers/news_controller.php';
            $news_controller = new NewsController();
            $news_controller->editNews();
            break;
        case 'find_news_by_title': 
            require_once __DIR__ . '/controllers/news_controller.php';
            $news_controller = new NewsController();
            $news_controller->searchByTitleProvider();
            break;
        case 'filtered_news':
            require_once __DIR__ . '/controllers/news_controller.php';
            $news_controller = new NewsController();
            $news_controller->search();
            break;
        default:
            http_response_code(404);
            require __DIR__ . '/views/404.php';
            break;
    }
}

frontController($qs);

?>