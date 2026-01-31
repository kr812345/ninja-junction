import Member from '../Model/model.member.js';

// Create a new membership application
const createMember = async (memberData) => {
  const member = new Member(memberData);
  await member.save();
  return member;
};

// Get all membership applications with pagination and filtering
const getMembers = async (query) => {
  const { page = 1, limit = 10, status } = query;
  const filter = status ? { status } : {};

  const members = await Member.find(filter)
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();

  const count = await Member.countDocuments(filter);

  return {
    members,
    totalPages: Math.ceil(count / limit),
    currentPage: page
  };
};

// Get a single membership application by ID
const getMemberById = async (id) => {
  const member = await Member.findById(id);
  if (!member) {
    throw new Error('Membership application not found');
  }
  return member;
};

// Update the status of a membership application
const updateMemberStatus = async (id, status) => {
  const member = await Member.findByIdAndUpdate(id, { status }, { new: true, runValidators: true });
  if (!member) {
    throw new Error('Membership application not found');
  }
  return member;
};

// Delete a membership application
const deleteMember = async (id) => {
  const member = await Member.findByIdAndDelete(id);
  if (!member) {
    throw new Error('Membership application not found');
  }
  return { message: 'Membership application deleted successfully' };
};

export {
  createMember,
  getMembers,
  getMemberById,
  updateMemberStatus,
  deleteMember
};
