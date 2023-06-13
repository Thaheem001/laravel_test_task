let allTasksList = [
    {
        id: 56,
        name: "Task 2",
        priority: "high",
        time_stamp: "3:48:00 AM , 13/06/2023",
        project: "Project A",
    },
    {
        id: 23,
        name: "Task 1",
        priority: "high",
        time_stamp: "3:42:00 AM , 13/06/2023",
        project: "Laravel Test Task",
    },
    {
        id: 3,
        name: "Task 1",
        priority: "high",
        time_stamp: "3:42:00 AM , 13/06/2023",
        project: "Project D",
    },
    {
        id: 37,
        name: "Task 1",
        priority: "high",
        time_stamp: "3:42:00 AM , 13/06/2023",
        project: "Laravel Test Task",
    },
    {
        id: 74,
        name: "Task 1",
        priority: "high",
        time_stamp: "10:16:00 AM , 13/06/2023",
        project: "Project B",
    },
    {
        id: 63,
        name: "Task 1",
        priority: "high",
        time_stamp: "9:12:00 AM , 13/06/2023",
        project: "Project A",
    },
    {
        id: 23,
        name: "Task 3",
        priority: "high",
        time_stamp: "1:28:00 AM , 13/06/2023",
        project: "Project A",
    },
    {
        id: 2,
        name: "Task 2",
        priority: "high",
        time_stamp: "12:46:00 AM , 13/06/2023",
        project: "Project B",
    },
    {
        id: 46,
        name: "Task 2",
        priority: "low",
        time_stamp: "6:16:00 AM , 13/06/2023",
        project: "Project E",
    },
    {
        id: 60,
        name: "Task 4",
        priority: "low",
        time_stamp: "4:59:00 AM , 13/06/2023",
        project: "Project D",
    },
    {
        id: 51,
        name: "Task 4",
        priority: "medium",
        time_stamp: "8:36:00 AM , 13/06/2023",
        project: "Project C",
    },
    {
        id: 8,
        name: "Task 4",
        priority: "low",
        time_stamp: "6:34:00 AM , 13/06/2023",
        project: "Project B",
    },
    {
        id: 81,
        name: "Task 2",
        priority: "low",
        time_stamp: "9:34:00 AM , 13/06/2023",
        project: "Project C",
    },
    {
        id: 1,
        name: "Task 2",
        priority: "medium",
        time_stamp: "5:19:00 AM , 13/06/2023",
        project: "Project E",
    },
    {
        id: 23,
        name: "Task 3",
        priority: "low",
        time_stamp: "10:25:00 AM , 13/06/2023",
        project: "Project A",
    },
    {
        id: 23,
        name: "Task 1",
        priority: "low",
        time_stamp: "1:24:00 AM , 13/06/2023",
        project: "Project D",
    },
    {
        id: 37,
        name: "Task 5",
        priority: "low",
        time_stamp: "8:49:00 AM , 13/06/2023",
        project: "Project E",
    },
    {
        id: 7,
        name: "Task 5",
        priority: "high",
        time_stamp: "10:43:00 AM , 13/06/2023",
        project: "Project B",
    },
    {
        id: 52,
        name: "Task 1",
        priority: "high",
        time_stamp: "5:43:00 AM , 13/06/2023",
        project: "Project B",
    },
    {
        id: 73,
        name: "Task 2",
        priority: "medium",
        time_stamp: "1:20:00 AM , 13/06/2023",
        project: "Project A",
    },
    {
        id: 76,
        name: "Task 4",
        priority: "low",
        time_stamp: "4:35:00 AM , 13/06/2023",
        project: "Project D",
    },
    {
        id: 80,
        name: "Task 5",
        priority: "low",
        time_stamp: "5:48:00 AM , 13/06/2023",
        project: "Project C",
    },
    {
        id: 93,
        name: "Task 3",
        priority: "medium",
        time_stamp: "12:30:00 AM , 13/06/2023",
        project: "Project D",
    },
    {
        id: 75,
        name: "Task 3",
        priority: "low",
        time_stamp: "12:14:00 AM , 13/06/2023",
        project: "Project E",
    },
];
const OldArray = allTasksList;

let projectList = [
    { id: 1, name: "Laravel Test Task" },
    { id: 2, name: "Project A" },
    { id: 3, name: "Project B" },
    { id: 4, name: "Project C" },
    { id: 5, name: "Project D" },
    { id: 6, name: "Project E" },
];
$(document).ready(function () {
    // map tasks list
    const tableMapping = {
        high: "#highTable tbody",
        medium: "#mediumTable tbody",
        low: "#lowTable tbody",
    };

    const mapTaskList = () => {
        $("#highTable tbody,#mediumTable tbody,#lowTable tbody").empty();
        allTasksList.forEach(function (task) {
            const tableSelector = tableMapping[task.priority];
            $(tableSelector).append(`
              <tr class="bg-white" >
                <td>${task.name}</td>
                <td>${task.priority}</td>
                <td>${task.time_stamp}</td>
                <td>${task.project}</td>
                <td >
                <div class="d-flex " >
                <button class="btn btn-sm btn-warning edit mx-2" >
                  <i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
                </button>
                <button class="btn btn-sm btn-danger delete" >
                  <i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
                </button>
                </div>
                </td>
              </tr>
            `);
        });
        // Activate tooltip
        $('[data-toggle="tooltip"]').tooltip();

        $(".dataTable tbody").sortable();
        $(".dataTable tbody tr").draggable();
        $(".dataTable").droppable({
            receiveHandler: function (ui) {
                console.log(ui);
                $(this).children("tbody").append(ui.item);
                ui.item.remove();
            },
        });

        // Event handler for edit button
        $("#highTable, #mediumTable, #lowTable").on("click", ".edit", function (e) {
            e.preventDefault();
            $("#editTaskModal").modal("show");
        });

        // Event handler for delete button
        $("#highTable, #mediumTable, #lowTable").on(
            "click",
            ".delete",
            function (e) {
                e.preventDefault();
                $("#deleteTaskModal").modal("show");
                $(this).parent("li").remove();
            }
        );
    };

    const projectMapping = () => {
        $(
            ".project-container ul,#datalistOptions, .custom-select.projects"
        ).empty();
        projectList.forEach(function (project) {
            $(
                ".project-container ul"
            ).append(`<li class="d-flex justify-content-between my-2 " ><span>${project.name}</span><div class=" " >
            <button class="btn btn-sm btn-warning edit mx-2" style="min-width:auto" >
              <i class="material-icons"title="Edit">&#xE254;</i>
            </button>
            <button class="btn btn-sm btn-danger delete" style="min-width:auto" >
              <i class="material-icons"title="Delete">&#xE872;</i>
            </button>
            </div></li>`);
            $("#datalistOptions").append(`<option value="${project.name}">`);
            $(".custom-select.projects").append(
                `<option value="${project.name}">${project.name}</option>`
            );
        });
    };

    mapTaskList();
    projectMapping();

    // add new Project
    $("#addProjectBtn").on("click", function () {
        const inputValue = $("#addProject").val();
        projectList.push({ id: projectList.length, name: inputValue });
        $("#addProject").val('')
        projectMapping();
    });


    // add new tasks 
    $(".addNewTask").submit(function (e) {
        e.preventDefault();
        var formData = {};

        // Iterate over each form field
        $(this)
            .find(':input')
            .each(function () {
                var field = $(this);
                var fieldName = field.attr('name');
                var fieldValue = field.val();
                formData[fieldName] = fieldValue;
            });
        allTasksList.unshift({ id: allTasksList.length, ...formData });
        $(this)[0].reset();
        mapTaskList();
        $("#addEmployeeModal").modal("hide");
    });

    // search on input field
    $("#searchTasks").on("focus input", function () {
        if ($(this).is(":focus") && $(this).val().length > 0) {
            allTasksList = OldArray.filter((task) => {
                return task.project
                    .toLocaleLowerCase()
                    .includes($(this).val().toLocaleLowerCase());
            });
        } else {
            allTasksList = OldArray;
        }
        mapTaskList();
    });
});
