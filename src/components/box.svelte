<box>
    <h2>
        <slot name="name">
            <span class="missing">Unknown name</span>
        </slot>
    </h2>
    <div>
        <slot name="description">
            <span class="missing">No description</span>
        </slot>
    </div>
    <a href="github.com">
        <img alt="Github Repo" src="../images/github/GitHub-Mark-64px.png" />
    </a>
</box>
<style>
    box {
        border: 1px solid black;
        padding: 10px;
        margin: 10px;
        display:flex;
        flex-direction: column;
        width: 300px;
        align-items: center;
    }
    .missing {
        color: gray;
    }
</style>