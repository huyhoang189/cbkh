import React, { Component } from 'react'
import { connect } from 'react-redux';
import actions from '../../redux/scientificJournal/actions'
import Loader from '../../components/utility/loader';
import ViewDocument from './ViewDocument'
import EditDocument from './EditDocument'
import { select } from 'redux-saga/effects';
class SingleDocument extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true,
        };
    }
    componentDidMount() {
        this.toggleCreatedDocument(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.toggleCreatedDocument(nextProps);
    }

    toggleCreatedDocument(props) {
        const {
            match,
            documentsP8,
            previewActive,
            enableEditView,
            selectedDocumentP8,
        } = props;
        // console.log(match)
        
        const documentId = match.params.id;

        let document = documentsP8.find(e => e.id === documentId)
        // console.log(documentsP8,documentId,document)
        if (documentsP8.length > 0 && document) {
            if(!enableEditView)
                this.props.updateSelectedDocumentP8(document)
        }
        else{
            // console.log("new");
            this.props.addSTT()
        }
        // else {
        //     console.log("them")
        //     this.props.previewDocumentP8(false)
            

        // }

        // try{
        //     if(match.params.id.includes("add")){
        //         this.props.previewDocumentP8(false)
        //     }
        //     else{
        //         this.props.previewDocumentP8(true)
        //     }
        // }
        // catch(error){
        //     console.log(error)
        // }
        // // console.log(match.params.id.length)

        // if (match.params.id.length > 0) {
        //     if (match.params.id.length === 13) {
        //         this.props.previewDocumentP8(false)
        //     }
        //     else {
        //         this.props.previewDocumentP8(true)
        //     }
        // }
        // // else this.setState({status : '-1'});
        // console.log(this.state.status)


    }
    render() {
        const { match, previewActive, enableEditView } = this.props;
        // console.log(previewActive)
        const redirectPath = match.url.replace(match.params.id, '');
        // return <Loader/>
        // console.log(enableEditView,previewActive)


        if (previewActive === false && enableEditView === false ) {
            return <EditDocument {...this.props} redirectPath={redirectPath} />;
        } else if(previewActive === true && enableEditView === false) {
            return <ViewDocument {...this.props} redirectPath={redirectPath} />;
        } else  if(previewActive === true && enableEditView === true ) {
            return <EditDocument {...this.props} redirectPath={redirectPath} />;
        } else  return <Loader/>
    }
}


export default connect(
    state => ({
        ...state.ScientificJournal,
    }),
    ({
        ...actions,
    })
)(SingleDocument)