'use strict';
  $(document).ready(function() {
    Sortable.create(draggableMultiple, {
      group: 'draggableMultiple',
      animation: 150
    });
  });
  $( function() {
    $( "#draggableMultiple" ).sortable({
      revert: true,
      animation:150
    });
  }); 