import React, { useEffect, useState } from 'react'
import { Breadcrumb, Button, Col, Row, Select, Table, Typography } from 'antd';
import Search from 'antd/lib/input/Search';
import { connect } from 'react-redux';
import { getAllUserData } from '../app/actions/getAllUserData';

function Index({getAllUserData,users}) {
    const defaultPagination = {
        current : 1,
        pageSize : 5,
        result : 10
    }
    const [pagination,setPagination] = useState({...defaultPagination});
    const [params,setParams] = useState({
        page : pagination["current"],
        pageSize : pagination["pageSize"],
        results : pagination["result"],
        gender : null,
        keyword : null,
        sortBy : null,
        sortOrder : null
    })

    useEffect(() => {
        // trigger all function when params's state is changed
        // get all user based on params
        getAllUserData(params);
        // reset pagination to the first page
        setPagination({...defaultPagination})
        //eslint-disable-next-line
    }, [params])
    
    const onSearchChange = (value) => {
        setParams({
            ...params,
            keyword : value
        });
    }

    const onGenderChange = (value) => {
        setParams({
            ...params,
            gender : value
        });
    }

    const onResetFilter = (e) => {
        e.preventDefault();
        const newParams = {
            ...params,
            gender : null
        }
        if(JSON.stringify(params) !== JSON.stringify(newParams)){
            // prevent to make sure nothing happens if params's state value is not same as the new params value.
            setParams(newParams)
        }
    }

    const handleTableChange = (newPagination, filters, sorter) => {
        if(JSON.stringify(pagination) !== JSON.stringify(newPagination)){
            // prevent if pagination state isn't same as new pagination param value
            setPagination({
                ...newPagination,
            });
            const newParams = {
                ...params,
                page : newPagination["current"],
                pageSize : newPagination["pageSize"]
            }
            getAllUserData(newParams);
            return;
        }
        setParams({
            ...params,
            sortBy : sorter.field,
            sortOrder : sorter.order
        })
    }
    
    const dataSource = [...users["data"]];
    const columns = [
        {
            title : "Username",
            dataIndex : "username",
            key : "username",
            sorter: 1
        },
        {
            title : "Name",
            dataIndex : "name",
            key : "name",
            sorter: 1
        },
        {
            title : "Email",
            dataIndex : "email",
            key : "email",
            sorter: 1
        },
        {
            title : "Gender",
            dataIndex : "gender",
            key : "gender",
            sorter: 1
        },
        {
            title : "Registered Date",
            dataIndex : "registeredDate",
            key : "registeredDate",
            sorter: 1
        }
    ];

    return (
        <div style={{padding: "16px"}}>
            <Breadcrumb style={{marginBottom:"16px"}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Example Page</Breadcrumb.Item>
            </Breadcrumb>
            <Row gutter={[16,16]} justify="start" style={{alignItems:"end"}}>
                <Col span={4}>
                    <Typography.Text>Search</Typography.Text>
                    <Search 
                        placeholder="Search..." 
                        allowClear 
                        enterButton 
                        onSearch={onSearchChange}
                    />
                </Col>
                <Col span={4}>
                    <Typography.Text>Gender</Typography.Text><br/>
                    <Select value={params["gender"]} style={{width:"-webkit-fill-available"}} onChange={onGenderChange}>
                        <Select.Option value={null}>All</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                        <Select.Option value="male">Male</Select.Option>
                    </Select>
                </Col>
                <Col span={4}>
                    <Button onClick={onResetFilter}>Reset Filter</Button>
                </Col>
            </Row>
            <Table 
                dataSource={dataSource} 
                columns={columns}
                rowKey="username"
                style={{margin:"16px 0"}}
                pagination={pagination}
                onChange={handleTableChange}
                loading={users["loading"]}
            />
        </div>
    )
}

const mapStateProps = (state) => ({
    users : state.users
})

const mapDispatchToProps = dispatch => ({
    getAllUserData : (params) => {
        dispatch(getAllUserData(params));
    }
})

export default connect(mapStateProps,mapDispatchToProps)(Index);