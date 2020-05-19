$(document).ready(function() {
    
    var commonRenderersModule = function() {

    return {

        initNavbar: function(selector) {
            
            let out = `<div class="mytopnav">
                    
                <a href="javascript:void(0);" 
                    class="active" 
                    style="display:block;height:100%;"
                    >
                    Oncle Vanyo's News Module
                </a>

                <div id="myLinks">
                    <a href="#" 
                        class="btn btn-info btn-lg" 
                        data-toggle="modal" 
                        data-target="#loginModal" 
                        id="login-link"
                        style="margin-top:8px;margin-bottom:8px;font-size:18px;"
                        >
                    </a>

                    <div id="content-in-nav">
                        <a href="#news" class="inner-link" id="news">
                            News
                        </a>
                    </div>

                </div>

                <a href="javascript:void(0);" 
                    class="icon"  
                    id="navIcon">  
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </a> 

            </div>`;

            $(selector).html(out);

        },

        initLoginModal: function(selector) {
            
            let out = `
                <div class="modal fade" id="loginModal" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">
                                &times;
                            </button>
                            <h4 class="modal-title"> Login User form </h4>
                        </div>
                        <div class="modal-body">

                            <div class="container" id="login-form">
                                <form id="loginForm">
                                    <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="glyphicon glyphicon-user"></i>
                                        </span>
                                            <input id="email" 
                                                type="text" 
                                                class="form-control" 
                                                name="email" 
                                                placeholder="Email"
                                                required> 
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="glyphicon glyphicon-lock"></i>
                                        </span>
                                        <input id="password" 
                                            type="password" 
                                            class="form-control" 
                                            name="password" 
                                            placeholder="Password" 
                                            required>
                                    </div>
                                    
                                    <div class="modal-footer">
                                        <button type="submit" class="btn btn-default"> 
                                            Login 
                                        </button>    
                                        <button type="button" 
                                            class="btn btn-default" 
                                            data-dismiss="modal"
                                            id="closeBtn"> 
                                            Close 
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;

            $(selector).html(out);
        },

        initInfoModal: function(selector) {
            
            let out = `
                <div id="infoModal" class="modal fade" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">
                                &times;
                            </button>
                            <h4 class="modal-title"> Modal Header </h4>
                        </div>
                        <div class="modal-body">
                            <div id="infoMsg"> </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" 
                                class="btn btn-default" 
                                data-dismiss="modal" 
                                id="closeInfoModalBtn"
                                >
                                Close
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            `;

            $(selector).html(out);
        },

        initInsertNewsModal: function(selector) {
            
            let out = `
                <div class="modal fade" id="insertNewsModal" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">
                                    &times;
                                </button>
                                <h4 class="modal-title"> Insert News Form </h4>
                            </div>
                            <div class="modal-body">

                                <div class="container" id="ins-news-form">
                                    <form id="insNewsForm">
                                        <p> News Title: </p>
                                        <div class="input-group" style="width:100%;">
                                            <span class="input-group-addon">
                                                <i class="glyphicon glyphicon-tags"></i>
                                            </span>                                        
                                            <input id="insNewsTitle" 
                                                    type="text" 
                                                    class="form-control" 
                                                    name="insNewsTitle" 
                                                    placeholder="News Title"
                                                    required
                                                    >
                                        </div>

                                        <p> News Description: </p>
                                        <div class="input-group" style="width:100%;">
                                            <span class="input-group-addon">
                                                <i class="glyphicon glyphicon-tags"></i>
                                            </span>                                        
                                            <input id="insNewsDescription" 
                                                    type="text" 
                                                    class="form-control" 
                                                    name="insNewsDescription" 
                                                    placeholder="News Description"
                                                    required
                                                    >
                                        </div>

                                        <p> Text: </p>
                                        <div class="input-group" style="width:100%;">
                                            <textarea name="insNewsText" 
                                                id="insNewsText" 
                                                style="width:100%;height:240px;"
                                                > Enter the news content here ..
                                            </textarea>
                                        </div>
                                                                            
                                        <div class="input-group" style="width:100%;">
                                            <br>
                                            <button type="submit" class="btn btn-default"> 
                                                Save  
                                            </button> &nbsp;
                                            <button type="reset" class="btn btn-default"> 
                                                Reset 
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            $(selector).html(out);
        },

        initEditNewsModal: function(selector) {
            
            let out = `
                <div class="modal fade" id="editNewsModal" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">
                                    &times;
                                </button>
                            <h4 class="modal-title"> Edit News Form </h4>
                            </div>
                            <div class="modal-body">
                                <div class="container" id="edit-news-form">
                                    <form id="editNewsForm">

                                        <p> News Id:</p>
                                        <div class="input-group" style="width:100%;">
                                            <span class="input-group-addon">
                                            <i class="glyphicon glyphicon-saved"></i>
                                            </span>
                                            <input id="editNewsId"
                                                    type="text"
                                                    class="form-control" 
                                                    name="editNewsId" 
                                                    value=""
                                                    disabled
                                                    >
                                        </div>

                                        <p> Date: </p>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="glyphicon glyphicon-th"></i>
                                            </span>
                                            <input type="date" 
                                                id="editNewsDate" 
                                                name="editNewsDate"
                                                required
                                                >
                                        </div>

                                        <p> Title: </p>
                                        <div class="input-group" style="width:100%;">
                                            <span class="input-group-addon">
                                                <i class="glyphicon glyphicon-tags"></i>
                                            </span>
                                            <input id="editNewsTitle" 
                                                    type="text" 
                                                    class="form-control" 
                                                    name="editNewsTitle" 
                                                    placeholder="News Title"
                                                    required
                                                    >
                                        </div>

                                        <p> News Description: </p>
                                        <div class="input-group" style="width:100%;">
                                            <span class="input-group-addon">
                                                <i class="glyphicon glyphicon-tags"></i>
                                            </span>                                        
                                            <input id="editNewsDescription" 
                                                    type="text" 
                                                    class="form-control" 
                                                    name="editNewsDescription" 
                                                    placeholder="News Description"
                                                    required
                                                    >
                                        </div>

                                        <p> Text: </p>
                                        <div class="input-group" style="width:100%;">
                                            <textarea name="editNewsText" 
                                                id="editNewsText" 
                                                style="width:100%;height:240px;"
                                                > Enter the news content here ..
                                            </textarea>
                                        </div>
                                        
                                        <div class="input-group" style="width:100%;">
                                            <br>
                                            <button type="submit" class="btn btn-default"> 
                                                Edit  
                                            </button> &nbsp;
                                            <button type="reset" class="btn btn-default"> 
                                                Reset
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            $(selector).html(out);
        },

        initInsertUserModal: function(selector) {
            
            let out = `
                <div class="modal fade" id="insertUserModal" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">
                                    &times;
                                </button>
                                <h4 class="modal-title"> Insert User Form </h4>
                            </div>
                            <div class="modal-body">

                                <div class="container" id="ins-user-form">
                                    <form id="insUserForm">
                                        
                                        <p> Email: </p>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="glyphicon glyphicon-envelope"></i>
                                            </span>
                                                <input id="insUserEmail" 
                                                    type="email" 
                                                    class="form-control" 
                                                    name="insUserEmail" 
                                                    placeholder="Email"
                                                    required
                                                    > 
                                        </div>

                                        <p> Password: </p>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="glyphicon glyphicon-lock"></i>
                                            </span>
                                            <input id="insUserPassword" 
                                                type="password" 
                                                class="form-control" 
                                                name="insUserPassword" 
                                                placeholder="Password" 
                                                required>
                                        </div>
                                        
                                        <div class="input-group" style="width:100%;">
                                            <br>
                                            <button type="submit" class="btn btn-default"> 
                                                Save  
                                            </button> &nbsp;
                                            <button type="reset" class="btn btn-default"> 
                                                Reset 
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            $(selector).html(out);
        },

        initEditUserModal: function(selector) {
            
            let out = `
                <div class="modal fade" id="editUserModal" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">
                                    &times;
                                </button>
                            <h4 class="modal-title"> Edit User Form </h4>
                            </div>
                            <div class="modal-body">
                                <div class="container" id="edit-user-form">
                                    <form id="editUserForm">
                                        
                                        <p> User Id: </p>
                                        <div class="input-group"> 
                                            <span class="input-group-addon">
                                                <i class="glyphicon glyphicon-saved"></i>
                                            </span>                                        
                                            <input id="editUserId"
                                                type="text"
                                                class="form-control" 
                                                name="editUserId" 
                                                value=""
                                                disabled
                                                >
                                        </div>

                                        <p> User Email: </p>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="glyphicon glyphicon-envelope"></i>
                                            </span>
                                                <input id="editUserEmail" 
                                                    type="email" 
                                                    class="form-control" 
                                                    name="editUserEmail" 
                                                    value="" 
                                                    required
                                                    > 
                                        </div>

                                        <p> Password: </p>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="glyphicon glyphicon-lock"></i>
                                            </span>
                                            <input id="editUserPassword" 
                                                type="password" 
                                                class="form-control" 
                                                name="editUserPassword" 
                                                value="" 
                                                required>
                                        </div>

                                        <div class="input-group" style="width:100%;">
                                            <br>
                                            <button type="submit" class="btn btn-default"> 
                                                Edit  
                                            </button> &nbsp;
                                            <button type="reset" class="btn btn-default"> 
                                                Reset
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            $(selector).html(out);
        },

        initLandingPage: function(selector) {
            
            let out = `
                <h1 style="padding-left:40px;"> Landing page </h1> 
            `;
            
            $(selector).html(out);
        },
        
        initActionLinks: function() {
        
            let out = `
                <ul class="nav navbar-nav">
                    <li>
                        <a href="#" class="action-link" id="news-rep-link"> 
                            News Report 
                        </a>
                    </li>
                    <li>
                        <a href="#" class="action-link" id="news-admin-rep-link"> 
                            News Admin
                        </a>
                    </li>
                    <li>
                        <a href="#" class="action-link" id="users-admin-rep-link"> 
                            Users Admin
                        </a>
                    </li>
                </ul>`;
    
            $('#action-links-holder').html(out);
    
        },

        initFilterZoneInNewsReport: function() {
            
            let out = `
                <fieldset> 
                <div class="container">
                <form id="searchForm">
                <table>
                <tr>
                <td> <b style="color:#222222;padding-right:3px;"> From: </b> </td>
                <td>
                <div class="input-group">
                <input type="date" id="fromDateFilter" name="fromDateFilter">
                </div>
                </td>
                <td> <b style="color:#222222;padding-left:3px;padding-right:3px;"> To: </b> </td>
                <td>
                <div class="input-group">
                <input type="date" id="toDateFilter" name="toDateFilter">
                </div>
                </td>
                </tr>
                </table>
                </div>
                <div class="input-group" style="width:100%;">
                <input id="searchByTitle" type="text" class="form-control" name="searchByTitle" placeholder="Search by Title" required>
                </div>
                <button type="submit" class="btn btn-default" id="searchBtn"> Search </button>
                </form>
                </fieldset>
                <div class="container" style="margin-left:0px;padding-left:0px;">
                <button id="see-all-news" class="s-buttons" style="margin-left:0px;">
                See all news
                </button>
                <button id="sort-by-title-asc" class="s-buttons" style="margin-left:0px;">
                Sort by title ASC
                </button>
                <button id="sort-by-title-dsc" class="s-buttons">
                Sort by title DSC
                </button>
                <button id="sort-by-date-asc" class="s-buttons">
                Sort by date ASC
                </button>
                <button id="sort-by-date-dsc" class="s-buttons">
                Sort by date DSC
                </button>
                </div>
            `;

            $('#filter-zone').html(out);

        }

    };
}


var loginModule = function() {

    let stateOfUser = {};

    return {
        
        init: function() {
            
            $('#login-link').html('<span class="glyphicon glyphicon-log-in"></span> Login');
            $('#content-in-nav').hide();

            $('#navIcon').click(function() {
                var navBtn = document.getElementById("myLinks");
                if (navBtn.style.display === "block") {
                    navBtn.style.display = "none";
                } else {
                    navBtn.style.display = "block";
                }
            });

            let loginForm = $("#loginForm");

            loginForm.on('submit', function(event) {
                event.preventDefault();
                sendCredentials();
                $("#loginModal").hide();
            });

            function sendCredentials() {
                
                let email = $("#email").val();
                let password = $("#password").val();

                let input = {
                    email: email,
                    pwd: password
                };

                let isValidInput = function(input) {
                    
                    let procedureArr = [];

                    var escapeHtml = function(text) {
                        return text
                            .replace(/&/g, "&amp;")
                            .replace(/</g, "&lt;")
                            .replace(/>/g, "&gt;")
                            .replace(/"/g, "&quot;")
                            .replace(/'/g, "&#039;");
                    };

                    for (let x in input) {
                        escapeHtml(input.email).trim();
                        escapeHtml(input.pwd).trim();
                    }
                    
                    let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!emailRegEx.test(String(input.email).toLowerCase())) {    
                        procedureArr.push('Invalid email!');
                    }

                    if (procedureArr.length > 0) {
                    
                        for (let i = 0; i < procedureArr.length; i++) {
                            msg += '<p>' + procedureArr[i] + '</p>';
                        }
                        return false;

                    } else {
                        return true;
                    }
                };

                if (isValidInput) {

                    let data = JSON.stringify(input);
                    let url = './index.php?login';
                    
                    let promise = new Promise(function(resolve, reject) { 
                        let req = new XMLHttpRequest();					
                        req.responseType = 'json';
                        req.open("POST", url, true);
                        req.onload = function() { 
                            resolve(req.response);
                        }; 
                        req.onerror = function() { 
                            reject(req.statusText);
                        }; 
                        req.send(data);
                    });
            
                    promise.then(function(response) {
                        displayContent(response);
                    });

                    promise.then(function(response){

                        if(response.token === 'admin!123') {
                            stateOfUser.status = 'admin';
                        }

                        if(response.token === 'visitor!123') {
                            stateOfUser.status = 'visitor';
                        }  

                    });
            
                    promise.then(function(response) {
                        if(response.token !== 'OUT!') {
                            $('#login-link')
                                .html('<span class="glyphicon glyphicon-log-out"></span> Log out')
                                .click(function() {
                                location.reload(true);
                            });
                        }
                    });
                    
                    return promise;
                }

            }

            function displayContent(response) {

                if (response.token === 'admin!123') {

                    $('#landing-page').hide();	
                    $('#content-in-nav').show(200);
                    
                } else if (response.token === 'visitor!123') {

                    $('#landing-page').hide();
                    $('#content-in-nav').show();
                    $('#news-admin-rep-link').hide();
                    $('#users-admin-rep-link').hide();
                                       
                } else {

                    $('#content-in-nav').hide();
                    let msg = '<h2 style="color:red;"> Wrong Email or Password! </h2>';
                    $('#infoMsg').html(msg);
                    $('#infoModal').modal('toggle');
                }

                $('#loginModal').modal('toggle'); 
            }
        },

        userStatus: stateOfUser

    };
}


var userModule = function() { 

    function deleteUser(valueUserId) {
        
        let input = { uid: valueUserId };
        let data = JSON.stringify(input);
        
        let promise = new Promise(function(resolve, reject) {
            let url = './index.php?del_user';
            let req = new XMLHttpRequest();
            req.open('POST', url, true);
            req.responseType = 'json';
            req.onload = function() {
                resolve(req.response);
            };
            req.onerror = function() {
                reject(req.statusText);
            };
            req.send(data);
        });

        promise.then(function() {
            $('#infoMsg').html('<h2 style="color:green;"> Record deleted! </h2>');
            $('#infoModal').modal('toggle');
        });

        promise.then(function() {
            displayUsers(); 
        });

        return promise;
    }

    function editUser() {
    
        let editUserId = $('#editUserId').val();
        let editUserEmail = $('#editUserEmail').val();
        let editUserPassword = $('#editUserPassword').val();

        let input = { 
            uid: editUserId,
            email: editUserEmail,
            pwd: editUserPassword
        };

        var clearInput = function() {
            $('#editUserEmail').val(null);
            $('#editUserPassword').val(null);
        };

        let isValidInput = function(input) {
            
            let procedureArr = [];

            var escapeHtml = function(text) {
                return text
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
            }

            for (let x in input) {
                escapeHtml(input.email).trim();
                escapeHtml(input.pwd).trim();
            }

            let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!emailRegEx.test(String(input.email).toLowerCase())) {    
                procedureArr.push('Invalid email!');
            }
            
            if (input.pwd.length < 7 || input.pwd.length > 80) {
                procedureArr.push('Your password should be between 7 and 80 characters !');
            }

            if (procedureArr.length > 0) {
            
                let msg = '<h2 style="color:red;"> Note the errors: </h2>';
                for (let i = 0; i < procedureArr.length; i++) {
                    msg += '<p>' + procedureArr[i] + '</p>';
                }

                $('#infoMsg').html(msg);
                $('#infoModal').modal('toggle');

                $('#editUserModal').modal('toggle');
                $('#closeInfoModalBtn').click(function(){
                    $('#infoModal').hide();
                    $('#editUserModal').modal('toggle');
                    clearInput();
                });
                return false;
            } else {
                return true;
            }

        };

        if (isValidInput(input)) {

            let data = JSON.stringify(input);
            let url = './index.php?update_user';
            let promise = new Promise(function(resolve, reject) { 
                let req = new XMLHttpRequest();					
                req.responseType = 'json';
                req.open("POST", url, true);
                req.onload = function() { 
                    resolve(req.response);
                }; 
                req.onerror = function() { 
                    reject(req.statusText);
                }; 
                req.send(data);
            });

            promise.then(function(response) {
                
                $('#infoMsg').html('<h2 style="color:green;"> Record edited! </h2>');
                $('#infoModal').modal('toggle');
                $('#editUserModal').modal('toggle');
                displayUsers(); 
                clearInput(); 
            });
            
            return promise;
        }
    }

    function displayUsers() {
        
        let promise = new Promise(function(resolve, reject) {
            
            let url = './index.php?users_admin_rep';
            let req = new XMLHttpRequest();
            req.open('GET', url, true);
            req.responseType = 'json';
            req.onload = function() {
                resolve(req.response);
            };
            req.onerror = function() {
                reject(req.statusText);
            };
            req.send();

        });

        promise.then(function(response){
            
            $("#landing-page").hide();
            $("#users-report").hide();
            $('#users-admin-report').hide();
            $("#users-admin-report").show(200);
            
            let out = '';

            out += '<button id="insert-user-btn" data-toggle="modal" data-target="#insertUserModal">'; 
            out += 'Insert User';
            out += '</button>';
            
            out += '<div class="table-holder">';
            
            out += '<table>';
            out += '<tr>';
            out += '<th> Id </th>';
            out += '<th> Email </th>';
            out += '<th> Password </th>';
            out += '<th colspan="2"> Operations </th>';
            out += '</tr>';
            for (let i = 0; i < response.length; i++) {
                out += '<tr>';
                out += '<td>';
                out += response[i].uid;
                out += '</td>';
                out += '<td>';
                out += response[i].email;
                out += '</td>';
                out += '<td>';
                out += response[i].pwd;
                out += '</td>';
                out += '<td>';
                out += '<a href="#" class="del-user-link" ';
                out += 'style="margin:4px;text-decoration:none;color:#992600;width:18px;">';
                out += '<i class="glyphicon glyphicon-remove"></i>';
                out += '<span style="color:#333;margin-left:3px;margin-right:8px;"> Del </span>'; 
                out += '</a>';
                out += '</td>';
                out += '<td>';
                out += '<a href="#" class="edit-user-link"';
                out += 'data-toggle="modal" data-target="#editUserModal" '; 
                out += 'style="margin:4px;text-decoration:none;color:#B66B1B;width:18px;">';
                out += '<i class="glyphicon glyphicon-edit"></i>';
                out += '<span style="color:#333;margin-left:3px;"> Edit </span>';
                out += '</a>';
                out += '</td>';
                out += '</tr>';
            }
            out += '</table>';
            out += '</div>';

            $("#users-admin-report").html(out);
            
        });

        promise.then(function(response) {

            $('#insert-user-link').show(200);

            let del_user_links = document.getElementsByClassName("del-user-link");

            for (let i = 0; i < del_user_links.length; i++) {
                del_user_links[i].onclick = function() {
                    deleteUser(response[i].uid);                   
                }
            }

            let edit_user_links = document.getElementsByClassName("edit-user-link");

            for (let i = 0; i < edit_user_links.length; i++) {
                edit_user_links[i].onclick = function() {

                    $('#editUserId').val(response[i].uid);
                    $('#editUserEmail').val(response[i].email);
                    $('#editUserPassword').val(response[i].pwd);
                }
            }

        });
        
        return promise;
    }

    function insertUser() {
                
        let emailValue = $('#insUserEmail').val();
        let passwordValue = $('#insUserPassword').val();

        let input = { 
            email: emailValue,
            pwd: passwordValue
        };

        var clearInput = function() {
            $('#insUserEmail').val(null);
            $('#insUserPassword').val(null);
        }

        let isValidInput = function(input) {
            
            let procedureArr = [];

            var escapeHtml = function(text) {
                return text
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
            };

            for (let x in input) {
                escapeHtml(input.email).trim();
                escapeHtml(input.email).trim();
            }
            
            let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!emailRegEx.test(String(input.email).toLowerCase())) {    
                procedureArr.push('Invalid email!');
            }
            
            if (input.pwd.length < 7 || input.pwd.length > 80) {
                procedureArr.push('Your password should be between 7 and 80 characters !');
            }

            if (procedureArr.length > 0) {
            
                let msg = '<h2 style="color:red;"> Note the errors: </h2>';
                for (let i = 0; i < procedureArr.length; i++) {
                    msg += '<p>' + procedureArr[i] + '</p>';
                }

                $('#infoMsg').html(msg);
                $('#infoModal').modal('toggle');

                $('#insertUserModal').modal('toggle');
                $('#closeInfoModalBtn').click(function(){
                    $('#infoModal').hide();
                    $('#insertUserModal').modal('toggle');
                });
                return false;
            } else {
                return true;
            }

        };

        if (isValidInput(input)) {

            let data = JSON.stringify(input);
            let url = './index.php?insert_user';
            
            let promise = new Promise(function(resolve, reject) { 
                let req = new XMLHttpRequest();					
                req.responseType = 'json';
                req.open("POST", url, true);
                req.onload = function() { 
                    resolve(req.response);
                }; 
                req.onerror = function() { 
                    reject(req.statusText);
                }; 
                req.send(data);
            });

            promise.then(function() {
                $('#infoMsg').html('<h2 style="color:green;">Record saved!</h2>');
                displayUsers(); // to refresh the grid!!
                $('#infoModal').modal('toggle');
                $('#insertUserModal').modal('toggle');
                clearInput(); 
            });
            
            return promise;
        }

    }

    return {
        
        displayUsersAsAdmin: function() {

            let promise = new Promise(function(resolve, reject) {

                let url = './index.php?users_admin_rep';
                let req = new XMLHttpRequest();
                req.open('GET', url, true);
                req.responseType = 'json';
                req.onload = function() {
                    resolve(req.response);
                };
                req.onerror = function() {
                    reject(req.statusText);
                };
                req.send();
                
            });
    
            promise.then(function(response){
                
                $("#landing-page").hide();
                $("#news-report").hide();
                $('#news-admin-report').hide();
                $("#users-admin-report").show(200);
                
                let out = '';
    
                out += '<button id="insert-user-btn" data-toggle="modal" data-target="#insertUserModal">'; 
                out += 'Insert User';
                out += '</button>';
                
                out += '<div class="table-holder">';
                
                out += '<table>';
                out += '<tr>';
                out += '<th> Id </th>';
                out += '<th> Email </th>';
                out += '<th> Password </th>';
                out += '<th colspan="2"> Operations </th>';
                out += '</tr>';
                for (let i = 0; i < response.length; i++) {
                    out += '<tr>';
                    out += '<td>';
                    out += response[i].uid;
                    out += '</td>';
                    out += '<td>';
                    out += response[i].email;
                    out += '</td>';
                    out += '<td>';
                    out += response[i].pwd;
                    out += '</td>';
                    out += '<td>';
                    out += '<a href="#" class="del-user-link" ';
                    out += 'style="margin:4px;text-decoration:none;color:#992600;width:18px;">';
                    out += '<i class="glyphicon glyphicon-remove"></i>';
                    out += '<span style="color:#333;margin-left:3px;margin-right:8px;"> Del </span>'; 
                    out += '</a>';
                    out += '</td>';
                    out += '<td>';
                    out += '<a href="#" class="edit-user-link"';
                    out += 'data-toggle="modal" data-target="#editUserModal" '; 
                    out += 'style="margin:4px;text-decoration:none;color:#B66B1B;width:18px;">';
                    out += '<i class="glyphicon glyphicon-edit"></i>';
                    out += '<span style="color:#333;margin-left:3px;"> Edit </span>';
                    out += '</a>';
                    out += '</td>';
                    out += '</tr>';
                }
                out += '</table>';
                out += '</div>';
    
                $("#users-admin-report").html(out);
                
            });
    
            promise.then(function(response) {
    
                $('#insert-user-link').show(200);
    
                let del_user_links = document.getElementsByClassName("del-user-link");
    
                for (let i = 0; i < del_user_links.length; i++) {
                    del_user_links[i].onclick = function() {
                        deleteUser(response[i].uid);                   
                    }
                }
    
                let edit_user_links = document.getElementsByClassName("edit-user-link");
    
                for (let i = 0; i < edit_user_links.length; i++) {
                    edit_user_links[i].onclick = function() {
                        $('#editUserId').val(response[i].uid);
                        $('#editUserEmail').val(response[i].email);
                        $('#editUserPassword').val(response[i].pwd);
                    }
                }
    
            });
    
            promise.then(function() {
      
                let insertUserForm = $('#insUserForm');
            
                insertUserForm.on('submit', function(event) {
                    event.preventDefault();
                    insertUser();
                    displayUsers(); 
                });
                    
                let editUserForm = $('#editUserForm');
    
                editUserForm.on('submit', function(event) {
                    event.preventDefault();
                    editUser();
                    displayUsers(); 
                });
                
            });
            
            return promise;
        }
        

    };

}
  
  
var newsModule = function() { 

    function insertNews() {

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); 
        let yyyy = today.getFullYear();
        
        let date = yyyy + '-' + mm + '-' + dd;

        let title = $('#insNewsTitle').val();
        let description = $('#insNewsDescription').val();
        let text = $('#insNewsText').val();

        let input = { 
            date: date,
            title: title,
            description: description,
            text: text
        };

        var clearInput = function() {
            $('#insNewsTitle').val(null);
            $('#insNewsDescription').val(null);
            $('#insNewsText').val(null);
        }

        let isValidInput = function(input) {
            
            let procedureArr = [];

            var escapeHtml = function(text) {
                return text
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
            };

            for (let x in input) {
                escapeHtml(input.date).trim();
                escapeHtml(input.title).trim();
                escapeHtml(input.description).trim();
                escapeHtml(input.text).trim();
            }

            if (input.title.length > 50) {
                procedureArr.push('The Title should be shorter than 50 characters !');
            }

            if (procedureArr.length > 0) {
            
                let msg = '<h2 style="color:red;"> Note the errors: </h2>';
                for (let i = 0; i < procedureArr.length; i++) {
                    msg += '<p>' + procedureArr[i] + '</p>';
                }
                $('#infoMsg').html(msg);
                $('#infoModal').modal('toggle');
                $('#insertNewsModal').modal('toggle');
                $('#closeInfoModalBtn').click(function(){
                    $('#infoModal').hide();
                    $('#insertNewsModal').modal('toggle');
                });
                
                return false;
            } else {
                return true;
            }
        }

        if (isValidInput(input)) {

            let data = JSON.stringify(input);
            let url = './index.php?insert_news';
            
            let promise = new Promise(function(resolve, reject) { 
                let req = new XMLHttpRequest();					
                req.responseType = 'json';
                req.open("POST", url, true);
                req.onload = function() { 
                    resolve(req.response);
                }; 
                req.onerror = function() { 
                    reject(req.statusText);
                }; 
                req.send(data);
            });

            promise.then(function() {
                displayNewsAsAdmin(); 
                $('#infoMsg').html('<h2 style="color:green;"> Record saved! </h2>');
                $('#infoModal').modal('toggle');
                $('#insertNewsModal').modal('toggle');
                clearInput();
            });
            
            return promise;
        }

    }

    function displayNewsAsAdmin() {

        let promise = new Promise(function(resolve, reject) {
            let url = './index.php?news_admin_rep';
            let req = new XMLHttpRequest();
            req.open('GET', url, true);
            req.responseType = 'json';
            req.onload = function() {
                resolve(req.response);
            };
            req.onerror = function() {
                reject(req.statusText);
            };
            req.send();
        });

        promise.then(function(response) {

            $("#landing-page").hide();
            $('#users-admin-report').hide();
            $("#news-report").hide();
            $('#news-admin-report').show(200); 


            let out = '';
            out += '<div class="table-holder">';

            out += '<button id="insert-news-btn" data-toggle="modal" data-target="#insertNewsModal">'; 
            out += 'Insert News';
            out += '</button>';
            
            out += '<table>';
            
            out += '<tr>';
            out += '<th> News Id </th>';
            out += '<th> News Date </th>';
            out += '<th> News Title </th>';
            out += '<th colspan="2"> Operations </th>';
            out += '</tr>';
            
            for (let i = 0; i < response.length; i++) {
                out += '<tr>';
                out += '<td>';
                out += response[i].id;
                out += '</td>';
                out += '<td>';
                out += response[i].date;
                out += '</td>';
                out += '<td>';
                out += response[i].title;
                out += '</td>';
                out += '<td>';
                out += '<a href="#" class="del-news-link" ';
                out += 'style="margin:4px;text-decoration:none;color:#992600;">';
                out += '<i class="glyphicon glyphicon-remove"></i>';  
                out += '</a>';
                out += '</td>';
                out += '<td>';
                out += '<a href="#" class="edit-news-link"';
                out += 'data-toggle="modal" data-target="#editNewsModal" '; 
                out += 'style="margin:4px;text-decoration:none;color:#B66B1B;">';
                out += '<i class="glyphicon glyphicon-edit"></i>'; 
                out += '</a>';
                out += '</td>';
                out += '</tr>';
            }

            out += '</table>';
            out += '</div>';

            $("#news-admin-report").html(out);

        });   
        
        promise.then(function(response) {

            let del_news_links = document.getElementsByClassName("del-news-link");

            for (let i = 0; i < del_news_links.length; i++) {
                del_news_links[i].onclick = function() {
                    deleteNews(response[i].id);                   
                }
            }

            let edit_news_links = document.getElementsByClassName("edit-news-link");

            for (let i = 0; i < edit_news_links.length; i++) {
                edit_news_links[i].onclick = function() {
                    $('#editNewsId').val(response[i].id);
                    $('#editNewsDate').val(response[i].date);
                    $('#editNewsTitle').val(response[i].title);
                    $('#editNewsDescription').val(response[i].description);
                    $('#editNewsText').val(response[i].text);
                }
            }
            
        });

        promise.then(function() {
            
            let editNewsForm = $('#editNewsForm');

            editNewsForm.on('submit', function(event) {
                event.preventDefault();
                editNews();
                displayNewsAsAdmin();
            });

            let editNewsSubmitFormBtn = $('#editNewsForm')[0][5];

            editNewsSubmitFormBtn.onclick = function() {
                $('#editNewsModal').modal('toggle');
                $('#infoMsg').html('<h2 style="color:green;"> Record edited! </h2>');
                $('#infoModal').modal('toggle');
            };
            
        });

        return promise;
    }

    function editNews() {

        let editNewsIdVal = $('#editNewsId').val();
        let editNewsDateVal = $('#editNewsDate').val();
        let editNewsTitleVal = $('#editNewsTitle').val();
        let editNewsDescriptionVal = $('#editNewsDescription').val();
        let editNewsTextVal = $('#editNewsText').val();

        let input = { 
            id: editNewsIdVal,
            date: editNewsDateVal,
            title: editNewsTitleVal,
            description: editNewsDescriptionVal,
            text: editNewsTextVal
        };

        let isValidInput = function(input) {
            
            let procedureArr = [];

            var escapeHtml = function(text) {
                return text
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
            };

            for (let x in input) {
                escapeHtml(input.date).trim();
                escapeHtml(input.title).trim();
                escapeHtml(input.description).trim();
                escapeHtml(input.text).trim();
            }

            if (input.title.length > 50) {
                procedureArr.push('The Title should be shorter than 50 characters !');
            }     

            if (procedureArr.length > 0) {
            
                let msg = '<h2 style="color:red;"> Note the errors: </h2>';
                for (let i = 0; i < procedureArr.length; i++) {
                    msg += '<p>' + procedureArr[i] + '</p>';
                }

                $('#infoMsg').html(msg);
                $('#infoModal').modal('toggle');

                $('#editNewsModal').modal('toggle');
                $('#closeInfoModalBtn').click(function(){
                    $('#infoModal').hide();
                    $('#editNewsModal').modal('toggle');
                });
                return false;
            } else {
                return true;
            }
        }

        if (isValidInput(input)) {

            let data = JSON.stringify(input);
            
            let url = './index.php?update_news';

            let promise = new Promise(function(resolve, reject) { 
                let req = new XMLHttpRequest();					
                req.responseType = 'json';
                req.open("POST", url, true);
                req.onload = function() { 
                    resolve(req.response);
                }; 
                req.onerror = function() { 
                    reject(req.statusText);
                }; 
                req.send(data);
            });
            
            return promise;
        }
    }

    function deleteNews(valueNewsId) {

        let input = { id: valueNewsId };
        let data = JSON.stringify(input);
        let promise = new Promise(function(resolve, reject) {
            let url = './index.php?del_news';
            let req = new XMLHttpRequest();
            req.open('POST', url, true);
            req.responseType = 'json';
            req.onload = function() {
                resolve(req.response);
            };
            req.onerror = function() {
                reject(req.statusText);
            };
            req.send(data);
        });

        promise.then(function() {
            displayNewsAsAdmin(); // to refresh the grid !!
            $('#infoMsg').html('<h2 style="color:green;"> Record deleted! </h2>');
            $('#infoModal').modal('toggle');
        });

        return promise;
    }

    let allNews = [];
    let filteredNews = [];

    function getAllNews() {
        
        let promise =  new Promise(function(resolve, reject) {

            let url = './index.php?news';

            let req = new XMLHttpRequest();
            req.open('GET', url, true);						
            req.responseType = 'json';

            req.onload = function() {
                resolve(req.response);
            };

            req.onerror = function() {
                reject(req.statusText);
            };

            req.send();

        })

        promise.then(function(response) {
            allNews = [];
            for (let i = 0; i < response.length; i++) {
                let obj = {
                    id: response[i].id,
                    date: response[i].date,
                    title: response[i].title,
                    description: response[i].description,
                    text: response[i].text
                };
                allNews.push(obj);
            }     
        });

        return promise;
    }

    function displayAllNewsReport(allNews) {
        
        if (allNews!== undefined && allNews.length > 0) {
            
            $("#landing-page").hide();
            $('#news-admin-report').hide();
            $('#users-admin-report').hide();
            commonRenderersModule().initFilterZoneInNewsReport(); 
            $("#news-report").show(200);    

            let out = '<ul id="result-list">';

            for (let i = 0; i < allNews.length; i++) {
            
                out += '<button class="accordion-collapsible">'; 
                out += allNews[i].date + ' / News Title: '; 
                out += allNews[i].title; 
                out += '</button>';
                
                out += '<li class="accordion-content">';

                out += '<p> News Id: </p>';
                out += '<p>';
                out += allNews[i].id; 
                out += '</p>';

                out += '<p> News Title: </p>';
                out += '<p>';
                out += allNews[i].title; 
                out += '</p>';

                out += '<p> News Date: </p>';
                out += '<p>';
                out += allNews[i].date; 
                out += '</p>';

                out += '<p> Description: </p>';
                out += '<p>' + allNews[i].description; + '</p>';
                
                out += '<hr>';
                
                out += '<p> News: </p>'; 
                out += '<pre style="margin-bottom:12px;">'; 
                out += allNews[i].text; 
                out += '</pre>';
                
                out += '</li>';
            }

            out += '</ul>';

            $("#news-report").html(out);
            
        }

        var coll = document.getElementsByClassName("accordion-collapsible");
        
        for (var i = 0; i < coll.length; i++) {
            
            coll[i].onclick = function() {

                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            }
        }
    }

    function displayFilteredNewsReport(filteredNews) {

        if (filteredNews!== undefined) {
            
            $("#landing-page").hide();
            $('#news-admin-report').hide();
            $('#users-admin-report').hide();
            commonRenderersModule().initFilterZoneInNewsReport(); 
            $("#news-report").show(200);    

            let out = '<ul id="result-list">';
            
            out += '<button class="accordion-collapsible">'; 
            out += filteredNews[0].date + ' / News Title: '; 
            out += filteredNews[0].title; 
            out += '</button>';
            
            out += '<li class="accordion-content">';

            out += '<p> News Id: </p>';
            out += '<p>';
            out += filteredNews[0].id; 
            out += '</p>';

            out += '<p> News Title: </p>';
            out += '<p>';
            out += filteredNews[0].title; 
            out += '</p>';

            out += '<p> News Date: </p>';
            out += '<p>';
            out += filteredNews[0].date; 
            out += '</p>';

            out += '<p> Description: </p>';
            out += '<p>' + filteredNews[0].description; + '</p>';
            
            out += '<hr>';
            
            out += '<p> News: </p>'; 
            out += '<pre style="margin-bottom:12px;">'; 
            out += filteredNews[0].text; 
            out += '</pre>';
            
            out += '</li>';

            out += '</ul>';

            $("#news-report").html(out);
            
        }

        
        var coll = document.getElementsByClassName("accordion-collapsible");
        
        coll[0].onclick = function() {

            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }

        $('#see-all-news').click(function() {

            $("#news-report").html(null);

            if (allNews !== undefined && allNews.length > 0) {
                        
                displayAllNewsReport(allNews);
                
                $('#sort-by-title-asc').click(function() {
                    sortByTitleASC();
                });

                $('#sort-by-title-dsc').click(function() {
                    sortByTitleDSC();
                });

                $('#sort-by-date-asc').click(function() {
                    sortByDateASC();
                });

                $('#sort-by-date-dsc').click(function() {
                    sortByDateDSC();
                }); 
             
            } 

            $('#searchBtn').click(function(){
                getFilteredNews();  
                if(filteredNews !== undefined && filteredNews.length > 0) {          
                    displayFilteredNewsReport(filteredNews);
                }
            });

        });

    }

    function getFilteredNews() {

        let title = $('#searchByTitle').val();
        let fromDate =$('#fromDateFilter').val(); 
        let toDate = $('#toDateFilter').val();

        let input = { 
            title: title,
            fromDate: fromDate,
            toDate: toDate
        };

        let isValidInput = function(input) {
            
            let procedureArr = [];

            var escapeHtml = function(text) {
                return text
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
            };

            for (let x in input) {
                escapeHtml(input.title).trim();
                escapeHtml(input.fromDate).trim();
                escapeHtml(input.toDate).trim();
            }

            if (input.title === null || input.title === '') {
                procedureArr.push('A Title should be entered !');
            }

            if (input.title.length > 50) {
                procedureArr.push('The Title should be shorter than 50 characters !');
            }

            if (input.fromDate === 'mm/dd/yyyy') {
                let minDate = getMinDate(allNews);              
                input.fromDate = minDate;
            }

            if (input.toDate === 'mm/dd/yyyy') {
                let maxDate = getMaxDate(allNews);                 
                input.toDate = maxDate;
            }

            if (input.fromDate > input.toDate) {
                let maxDate = getMaxDate(allNews);   
                input.toDate = maxDate;
            }

            if (procedureArr.length > 0) {

                let msg = '<h2 style="color:red;"> Note the errors: </h2>';
                for (let i = 0; i < procedureArr.length; i++) {
                    msg += '<p>' + procedureArr[i] + '</p>';
                }
                $('#infoMsg').html(msg);
                $('#infoModal').modal('toggle');
                $('#closeInfoModalBtn').click(function(){
                    $('#infoModal').hide();
                });

                return false;
            } else {
                return true;
            }
        }

        if (isValidInput(input)) {

            let data = JSON.stringify(input);
            let url = './index.php?filtered_news';
            
            let promise = new Promise(function(resolve, reject) { 
                let req = new XMLHttpRequest();					
                req.responseType = 'json';
                req.open("POST", url, true);
                req.onload = function() { 
                    resolve(req.response);
                }; 
                req.onerror = function() { 
                    reject(req.statusText);
                }; 
                req.send(data);
            });

            promise.then(function(response) {
                if (response !== null && response !== undefined) {
                    filteredNews.push(response[0]);
                }
            });

            promise.then(function(response) {
                if (response !== null && response !== undefined) {
                    displayFilteredNewsReport(filteredNews); 
                }
            });
            
            return promise;
        } 
            
    }

    function sortByDateDSC() {

        sortByDateASC();
        
        let btn = document.getElementsByClassName("accordion-collapsible");

        let listItems = document.getElementsByClassName("accordion-content");
        
        let tempId, tempTitle, tempDate, tempDescription, tempText;

        let half_ln = Math.floor(listItems.length / 2);

        for (let i = 0; i < half_ln; i++) {

            tempId = listItems[i].children[1].innerHTML;
            listItems[i].children[1].innerHTML = listItems[listItems.length - 1 - i].children[1].innerHTML;
            listItems[listItems.length - 1 - i].children[1].innerHTML = tempId;

            tempTitle = listItems[i].children[3].innerHTML;
            listItems[i].children[3].innerHTML = listItems[listItems.length - 1 - i].children[3].innerHTML;
            listItems[listItems.length - 1 - i].children[3].innerHTML = tempTitle;

            tempDate = listItems[i].children[5].innerHTML;
            listItems[i].children[5].innerHTML = listItems[listItems.length - 1 - i].children[5].innerHTML;
            listItems[listItems.length - 1 - i].children[5].innerHTML = tempDate;

            tempDescription = listItems[i].children[7].innerHTML;
            listItems[i].children[7].innerHTML = listItems[listItems.length - 1 - i].children[7].innerHTML;
            listItems[listItems.length - 1 - i].children[7].innerHTML = tempDescription;

            tempText = listItems[i].children[10].innerHTML;
            listItems[i].children[10].innerHTML = listItems[listItems.length - 1 - i].children[10].innerHTML;
            listItems[listItems.length - 1 - i].children[10].innerHTML = tempText;

        }

        for (let j = 0; j < listItems.length; j++) {
            
            let btnVal = '';
            btnVal += listItems[j].children[5].innerHTML;
            btnVal += '/ News Title: ';
            btnVal += listItems[j].children[3].innerHTML;

            btn[j].innerHTML = btnVal;
        }
    }

    function sortByDateASC() {
        
        let btn = document.getElementsByClassName("accordion-collapsible");

        let listItems = document.getElementsByClassName("accordion-content");

        var i, j, tempId, tempTitle, tempDate, tempDescription, tempText;

        for (i = 0; i < listItems.length; i++){
            for (j = i + 1; j < listItems.length; j++){
                
                if (listItems[i].children[5].innerHTML > 
                    listItems[j].children[5].innerHTML ) {

                    tempId = listItems[i].children[1].innerHTML;
                    listItems[i].children[1].innerHTML = listItems[j].children[1].innerHTML;
                    listItems[j].children[1].innerHTML = tempId; 

                    tempTitle = listItems[i].children[3].innerHTML;
                    listItems[i].children[3].innerHTML = listItems[j].children[3].innerHTML;
                    listItems[j].children[3].innerHTML = tempTitle;    

                    tempDate = listItems[i].children[5].innerHTML;
                    listItems[i].children[5].innerHTML = listItems[j].children[5].innerHTML;
                    listItems[j].children[5].innerHTML = tempDate;

                    tempDescription = listItems[i].children[7].innerHTML;
                    listItems[i].children[7].innerHTML = listItems[j].children[7].innerHTML;
                    listItems[j].children[7].innerHTML = tempDescription;

                    tempText = listItems[i].children[10].innerHTML;
                    listItems[i].children[10].innerHTML = listItems[j].children[10].innerHTML;
                    listItems[j].children[10].innerHTML = tempText;
                }
            }
            
            let btnVal = '';
            btnVal += listItems[i].children[5].innerHTML;
            btnVal += '/ News Title: ';
            btnVal += listItems[i].children[3].innerHTML;
            
            btn[i].innerHTML = btnVal;
        }

    }

    function sortByTitleASC() {

        let btn = document.getElementsByClassName("accordion-collapsible");

        let listItems = document.getElementsByClassName("accordion-content");

        var i, j, tempId, tempTitle, tempDate, tempDescription, tempText;

        for (i = 0; i < listItems.length; i++){
            for (j = i + 1; j < listItems.length; j++){
                
                if (listItems[i].children[3].innerHTML.toLowerCase() > 
                    listItems[j].children[3].innerHTML.toLowerCase()) {

                    tempId = listItems[i].children[1].innerHTML;
                    listItems[i].children[1].innerHTML = listItems[j].children[1].innerHTML;
                    listItems[j].children[1].innerHTML = tempId; 

                    tempTitle = listItems[i].children[3].innerHTML;
                    listItems[i].children[3].innerHTML = listItems[j].children[3].innerHTML;
                    listItems[j].children[3].innerHTML = tempTitle;    

                    tempDate = listItems[i].children[5].innerHTML;
                    listItems[i].children[5].innerHTML = listItems[j].children[5].innerHTML;
                    listItems[j].children[5].innerHTML = tempDate;

                    tempDescription = listItems[i].children[7].innerHTML;
                    listItems[i].children[7].innerHTML = listItems[j].children[7].innerHTML;
                    listItems[j].children[7].innerHTML = tempDescription;

                    tempText = listItems[i].children[10].innerHTML;
                    listItems[i].children[10].innerHTML = listItems[j].children[10].innerHTML;
                    listItems[j].children[10].innerHTML = tempText;

                    
                }
            }
            
            let btnVal = '';
            btnVal += listItems[i].children[5].innerHTML;
            btnVal += '/ News Title: ';
            btnVal += listItems[i].children[3].innerHTML;
            
            btn[i].innerHTML = btnVal;
        }

    }

    function sortByTitleDSC() {

        sortByTitleASC();
        
        let btn = document.getElementsByClassName("accordion-collapsible");

        let listItems = document.getElementsByClassName("accordion-content");
        
        let tempId, tempTitle, tempDate, tempDescription, tempText;

        let half_ln = Math.floor(listItems.length / 2);

        for (let i = 0; i < half_ln; i++) {

            tempId = listItems[i].children[1].innerHTML;
            listItems[i].children[1].innerHTML = listItems[listItems.length - 1 - i].children[1].innerHTML;
            listItems[listItems.length - 1 - i].children[1].innerHTML = tempId;

            tempTitle = listItems[i].children[3].innerHTML;
            listItems[i].children[3].innerHTML = listItems[listItems.length - 1 - i].children[3].innerHTML;
            listItems[listItems.length - 1 - i].children[3].innerHTML = tempTitle;

            tempDate = listItems[i].children[5].innerHTML;
            listItems[i].children[5].innerHTML = listItems[listItems.length - 1 - i].children[5].innerHTML;
            listItems[listItems.length - 1 - i].children[5].innerHTML = tempDate;

            tempDescription = listItems[i].children[7].innerHTML;
            listItems[i].children[7].innerHTML = listItems[listItems.length - 1 - i].children[7].innerHTML;
            listItems[listItems.length - 1 - i].children[7].innerHTML = tempDescription;

            tempText = listItems[i].children[10].innerHTML;
            listItems[i].children[10].innerHTML = listItems[listItems.length - 1 - i].children[10].innerHTML;
            listItems[listItems.length - 1 - i].children[10].innerHTML = tempText;

        }

        for (let j = 0; j < listItems.length; j++) {
            
            let btnVal = '';
            btnVal += listItems[j].children[5].innerHTML;
            btnVal += '/ News Title: ';
            btnVal += listItems[j].children[3].innerHTML;

            btn[j].innerHTML = btnVal;
        }
        
    }

    function getMinDate(allNews) {
        
        let min = allNews[0].date;
        
        for(let i = 0; i < allNews.length; i++) {
            if (allNews[i].date < min) {
                min = allNews[i].date;
            }
        }

        return min;
    }

    function getMaxDate(allNews) {
        
        let max = allNews[0].date;

        for(let i = 0; i < allNews.length; i++) {
            if (allNews[i].date > max) {
                max = allNews[i].date;
            }
        }

        return max;
    }
    
    return {
        
        init: function() {
                        
            $('#news').click(function() {

                getAllNews();
                
                commonRenderersModule().initActionLinks();

                if (loginModule().userStatus.status === 'visitor') {
                    $('#news-admin-rep-link').hide();
                    $('#users-admin-rep-link').hide();
                }
                
                $('#news-rep-link').click(function() {
                    
                    getAllNews();
                    
                    $('#filter-zone').show();
                    
                    if (allNews !== undefined && allNews.length > 0) {
                        
                        displayAllNewsReport(allNews);
                        
                        $('#sort-by-title-asc').click(function() {
                            sortByTitleASC();
                        });

                        $('#sort-by-title-dsc').click(function() {
                            sortByTitleDSC();
                        });

                        $('#sort-by-date-asc').click(function() {
                            sortByDateASC();
                        });

                        $('#sort-by-date-dsc').click(function() {
                            sortByDateDSC();
                        }); 
                     
                    } 

                    $('#searchBtn').click(function(){
                        getFilteredNews();  
                        if(filteredNews !== undefined && filteredNews.length > 0) {          
                            displayFilteredNewsReport(filteredNews);
                        }
                    });

                });

                $('#news-admin-rep-link').click(function() {
                    $('#filter-zone').hide();
                    displayNewsAsAdmin();
                });

                $('#users-admin-rep-link').click(function() {
                    $('#filter-zone').hide();
                    userModule().displayUsersAsAdmin();
                });

            });

            let insertNewsForm = $('#insNewsForm');

            insertNewsForm.on('submit', function(event) {
                event.preventDefault();
                insertNews();
                getAllNews();
                displayAllNewsReport(allNews);
                displayNewsAsAdmin(); 
            });  

        }

    };

}


    commonRenderersModule().initNavbar('.mobile-container');
    commonRenderersModule().initLoginModal('#login-modal-holder');
    commonRenderersModule().initInfoModal('#info-modal-holder');
    commonRenderersModule().initInsertNewsModal('#insert-news-modal-holder');
    commonRenderersModule().initEditNewsModal('#edit-news-modal-holder');
    commonRenderersModule().initInsertUserModal('#insert-user-modal-holder');
    commonRenderersModule().initEditUserModal('#edit-user-modal-holder');
    commonRenderersModule().initLandingPage('#landing-page');
    
    loginModule().init();
    
    newsModule().init();

});