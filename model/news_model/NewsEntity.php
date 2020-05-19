<?php

class NewsEntity {

    private $id;
    private $date;
    private $title;
    private $description;
    private $text;

    public function __construct($id = null, $date = null, $title = null, 
                        $description = null, $text = null) {

        $this->id = $id;
        $this->date = $date;
        $this->title = $title;
        $this->description = $description;
        $this->text = $text;
    }

    function getId() {
        return $this->id;
    }

    function setId($id) {
        $this->id = $id;
    }

    function getDate() {
        return $this->date;
    }

    function setDate($date) {
        $this->date = $date;
    }

    function getTitle() {
        return $this->title;
    }

    function setTitle($title) {
        $this->title = $title;
    }

    function getDescription() {
        return $this->description;
    }

    function setDescription($description) {
        $this->description = $description;
    }

    function getText() {
        return $this->text;
    }

    function setText($text) {
        $this->text = $text;
    }

}

?>