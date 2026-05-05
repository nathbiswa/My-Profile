

const loading = () => {
    return (
        <div>
            <div className="flex flex-col items-center gap-2">
                <span className="loading loading-spinner text-success"></span>
                <span className="text-xs text-muted"></span>
            </div>
        </div >
    );
};

export default loading;